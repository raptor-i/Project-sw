<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: text/plain');

require_once "../index.php";

// gets data from front-end
$posteddata = file_get_contents("php://input");

// decodes to json
$request = json_decode($posteddata);

// Deletes from db
$product->DeleteData($request,$db->getdb());

?>