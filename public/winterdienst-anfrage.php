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

$objektart      = clean($_POST['objektart'] ?? '');
$flaechenArr    = $_POST['flaechen'] ?? [];
$plzOrt         = clean($_POST['plzOrt'] ?? '');
$flaecheGroesse = clean($_POST['flaecheGroesse'] ?? '');
$zeitraum       = clean($_POST['zeitraum'] ?? '');
$name           = clean($_POST['name'] ?? '');
$telefon        = clean($_POST['telefon'] ?? '');
$email          = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$nachricht      = clean($_POST['nachricht'] ?? '');

if (!$objektart || !$plzOrt || !$name || empty($flaechenArr) || (!$telefon && !$email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Pflichtfelder fehlen']);
    exit;
}

if ($email && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige E-Mail-Adresse']);
    exit;
}

$objektartLabels = ['privat' => 'Privat', 'verwaltung' => 'Hausverwaltung', 'gewerbe' => 'Gewerbe'];
$objektartLabel  = $objektartLabels[$objektart] ?? $objektart;
$flaechenLabel   = implode(', ', array_map('htmlspecialchars', (array) $flaechenArr));

$to      = 'info@greenundclean.com';
$subject = "=?UTF-8?B?" . base64_encode("Neue Winterdienst-Anfrage – $name") . "?=";

$bodyLines = [
    'Neue Winterdienst-Anfrage über greenundclean.com',
    '',
    "Name: $name",
    $telefon ? "Telefon: $telefon" : null,
    $email ? "E-Mail: $email" : null,
    "Objektart: $objektartLabel",
    "PLZ/Ort: $plzOrt",
    "Zu räumende Flächen: $flaechenLabel",
    $flaecheGroesse ? "Länge/Größe: $flaecheGroesse" : null,
    $zeitraum ? "Gewünschter Zeitraum: $zeitraum" : null,
    '',
    'Nachricht:',
    $nachricht ?: '(keine)',
];
$body = implode("\n", array_filter($bodyLines, fn($line) => $line !== null));

$replyTo = $email ?: 'noreply@greenundclean.com';

$hasFile = isset($_FILES['foto']) && $_FILES['foto']['error'] === UPLOAD_ERR_OK;
$fileOk  = false;

if ($hasFile) {
    $allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    $maxSize      = 5 * 1024 * 1024;
    $fileType     = mime_content_type($_FILES['foto']['tmp_name']);
    $fileOk       = in_array($fileType, $allowedTypes, true) && $_FILES['foto']['size'] <= $maxSize;
}

if ($hasFile && $fileOk) {
    $boundary    = md5(uniqid((string) time(), true));
    $fileContent = chunk_split(base64_encode(file_get_contents($_FILES['foto']['tmp_name'])));
    $fileName    = basename($_FILES['foto']['name']);
    $fileType    = $_FILES['foto']['type'];

    $headers  = "From: noreply@greenundclean.com\r\n";
    $headers .= "Reply-To: $replyTo\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    $message  = "--$boundary\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $message .= $body . "\r\n\r\n";
    $message .= "--$boundary\r\n";
    $message .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n\r\n";
    $message .= $fileContent . "\r\n";
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
