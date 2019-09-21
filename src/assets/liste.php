<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
$liste = [
    'aaaaaaaaaaa',
    'tata',
    'tutu'
];


echo json_encode($liste);
?>