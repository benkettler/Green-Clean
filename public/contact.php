<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$body = json_decode(file_get_contents('php://input'), true);

if (!$body) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige Daten']);
    exit;
}

$vorname   = htmlspecialchars(trim($body['vorname'] ?? ''));
$nachname  = htmlspecialchars(trim($body['nachname'] ?? ''));
$email     = filter_var(trim($body['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$telefon   = htmlspecialchars(trim($body['telefon'] ?? ''));
$leistung  = htmlspecialchars(trim($body['leistung'] ?? ''));
$nachricht = htmlspecialchars(trim($body['nachricht'] ?? ''));

if (!$vorname || !$nachname || !$email || !$leistung || !$nachricht) {
    http_response_code(400);
    echo json_encode(['error' => 'Pflichtfelder fehlen']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige E-Mail-Adresse']);
    exit;
}

$leistungLabels = [
    'gartenpflege' => 'Gartenpflege',
    'winterdienst' => 'Winterdienst',
    'sonstiges'    => 'Sonstiges',
];

$leistungLabel = $leistungLabels[$leistung] ?? $leistung;
$to            = 'info@greenundclean.com';
$subject       = "=?UTF-8?B?" . base64_encode("Neue Anfrage: $leistungLabel – $vorname $nachname") . "?=";
$telefonZeile  = $telefon ? "Telefon: $telefon\n" : '';

$message = "Neue Kontaktanfrage über greenundclean.com\n\n"
    . "Name: $vorname $nachname\n"
    . "E-Mail: $email\n"
    . $telefonZeile
    . "Leistung: $leistungLabel\n\n"
    . "Nachricht:\n$nachricht";

$headers  = "From: noreply@greenundclean.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Fehler beim Senden der E-Mail.']);
}
