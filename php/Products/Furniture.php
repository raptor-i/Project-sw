<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: text/plain');

include_once "Product.php";
require_once "../index.php";


$postedData = json_decode(file_get_contents("php://input"));
print_r($postedData);
print_r($postedData->SKU . "  " . $postedData->Name . "  " . $postedData->Price . "   " . $postedData->Attribute);

if (isset($postedData)) {

    $NewFurn = new furniture($postedData->SKU, $postedData->Name, $postedData->Price);
    $NewFurn->SetAttributeType($postedData->Attribute);
    $db->AddData($NewFurn->GetSku(), $NewFurn->GetName(), $NewFurn->GetPrice(), $NewFurn->GetAttribute());

}
