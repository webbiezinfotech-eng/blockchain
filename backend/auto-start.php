<?php
/**
 * Auto-Start Backend Server Script
 * Yeh script backend server ko automatically start karega agar running nahi hai
 * 
 * Usage: Browser mein open karein ya cron job se run karein
 * Example: https://blockchain.webbiezinfotech.in/backend/auto-start.php
 */

header('Content-Type: application/json');

$response = [
    'success' => false,
    'message' => '',
    'server_status' => 'unknown'
];

// Check if Node.js is available
$nodeCheck = shell_exec('which node 2>&1');
if (empty($nodeCheck) || strpos($nodeCheck, 'not found') !== false) {
    $response['message'] = 'Node.js is not installed or not in PATH';
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit;
}

// Check if backend server is running
$healthCheck = @file_get_contents('http://localhost:3001/api/health');
$isRunning = $healthCheck !== false && strpos($healthCheck, 'running') !== false;

if ($isRunning) {
    $response['success'] = true;
    $response['message'] = 'Backend server is already running';
    $response['server_status'] = 'running';
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit;
}

// Server not running, start it
$backendDir = __DIR__;
$serverFile = $backendDir . '/server.js';

if (!file_exists($serverFile)) {
    $response['message'] = 'server.js not found in backend directory';
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit;
}

// Try to start with PM2 first (recommended)
$pm2Check = shell_exec('which pm2 2>&1');
if (!empty($pm2Check) && strpos($pm2Check, 'not found') === false) {
    // PM2 is available
    $pm2Start = shell_exec("cd {$backendDir} && pm2 start server.js --name email-server 2>&1");
    $pm2Save = shell_exec("pm2 save 2>&1");
    
    $response['success'] = true;
    $response['message'] = 'Backend server started with PM2';
    $response['server_status'] = 'started';
    $response['method'] = 'pm2';
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit;
}

// Fallback: Start with nohup
$nohupCommand = "cd {$backendDir} && nohup node server.js > server.log 2>&1 &";
$output = shell_exec($nohupCommand . ' 2>&1');

// Wait a moment and check if it started
sleep(2);
$healthCheckAfter = @file_get_contents('http://localhost:3001/api/health');
$isRunningAfter = $healthCheckAfter !== false && strpos($healthCheckAfter, 'running') !== false;

if ($isRunningAfter) {
    $response['success'] = true;
    $response['message'] = 'Backend server started with nohup';
    $response['server_status'] = 'started';
    $response['method'] = 'nohup';
} else {
    $response['message'] = 'Failed to start backend server. Check server.log for errors';
    $response['output'] = $output;
}

echo json_encode($response, JSON_PRETTY_PRINT);
?>
