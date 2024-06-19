<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['sequence']) && isset($data['greenInterval']) && isset($data['yellowInterval'])) {
        $sequence = $data['sequence'];
        $greenInterval = $data['greenInterval'];
        $yellowInterval = $data['yellowInterval'];

        // Perform any necessary server-side processing here
        // For example, you could log the data, validate it, or trigger other server-side processes

        echo json_encode(['status' => 'success', 'message' => 'Signals started']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>