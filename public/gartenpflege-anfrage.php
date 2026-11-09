<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

function clean($v) {
    return htmlspecialchars(trim($v ?? ''));
}

$auftragsart   = clean($_POST['auftragsart'] ?? '');
$arbeitenArr   = $_POST['arbeiten'] ?? [];
$plzOrt        = clean($_POST['plzOrt'] ?? '');
$beschreibung  = clean($_POST['beschreibung'] ?? '');
$name          = clean($_POST['name'] ?? '');
$telefon       = clean($_POST['telefon'] ?? '');
$email         = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);

if (!$plzOrt || !$name || !$email || empty($arbeitenArr)) {
    http_response_code(400);
    echo json_encode(['error' => 'Pflichtfelder fehlen']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige E-Mail-Adresse']);
    exit;
}

$auftragsartLabels = ['einmalig' => 'Einmalig', 'regelmaessig' => 'Regelmäßig', 'unklar' => 'Noch unklar'];
$auftragsartLabel  = $auftragsartLabels[$auftragsart] ?? 'Nicht angegeben';
$arbeitenLabel     = implode(', ', array_map('htmlspecialchars', (array) $arbeitenArr));

$to      = 'info@greenundclean.com';
$subject = "=?UTF-8?B?" . base64_encode("Neue Gartenpflege-Anfrage – $name") . "?=";

$bodyLines = [
    'Neue Gartenpflege-Anfrage über greenundclean.com',
    '',
    "Name: $name",
    $telefon ? "Telefon: $telefon" : null,
    $email ? "E-Mail: $email" : null,
    "Art des Auftrags: $auftragsartLabel",
    "Gewünschte Arbeiten: $arbeitenLabel",
    "PLZ/Ort: $plzOrt",
    '',
    'Beschreibung:',
    $beschreibung ?: '(keine)',
];
$body = implode("\n", array_filter($bodyLines, fn($line) => $line !== null));

$replyTo = $email ?: 'noreply@greenundclean.com';

$allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
$maxSize      = 5 * 1024 * 1024;
$maxFiles     = 3;

$validFiles = [];
if (isset($_FILES['fotos']) && is_array($_FILES['fotos']['name'])) {
    $count = min(count($_FILES['fotos']['name']), $maxFiles);
    for ($i = 0; $i < $count; $i++) {
        if ($_FILES['fotos']['error'][$i] !== UPLOAD_ERR_OK) continue;
        $tmpName = $_FILES['fotos']['tmp_name'][$i];
        $type    = mime_content_type($tmpName);
        if (!in_array($type, $allowedTypes, true) || $_FILES['fotos']['size'][$i] > $maxSize) continue;
        $validFiles[] = [
            'tmp_name' => $tmpName,
            'name'     => basename($_FILES['fotos']['name'][$i]),
            'type'     => $type,
        ];
    }
}

if (!empty($validFiles)) {
    $boundary = md5(uniqid((string) time(), true));

    $headers  = "From: noreply@greenundclean.com\r\n";
    $headers .= "Reply-To: $replyTo\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    $message  = "--$boundary\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $message .= $body . "\r\n\r\n";

    foreach ($validFiles as $file) {
        $fileContent = chunk_split(base64_encode(file_get_contents($file['tmp_name'])));
        $message .= "--$boundary\r\n";
        $message .= "Content-Type: {$file['type']}; name=\"{$file['name']}\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= "Content-Disposition: attachment; filename=\"{$file['name']}\"\r\n\r\n";
        $message .= $fileContent . "\r\n";
    }
    $message .= "--$boundary--";
} else {
    $headers  = "From: noreply@greenundclean.com\r\n";
    $headers .= "Reply-To: $replyTo\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message  = $body;
}

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Fehler beim Senden der E-Mail.']);
}
