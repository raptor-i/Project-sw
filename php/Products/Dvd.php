<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Type: text/plain');

require_once "Product.php";
require_once "../index.php";


$postedData = json_decode(file_get_contents("php://input"));
print_r($postedData);
print_r($postedData->SKU . "  " . $postedData->Name . "  " . $postedData->Price . "   " . $postedData->Attribute);

if (isset($postedData)) {

    $NewDvd = new DVD($postedData->SKU, $postedData->Name, $postedData->Price);
    $NewDvd->SetAttributeType($postedData->Attribute);
    $product->AddData($NewDvd->GetSku(), $NewDvd->GetName(), $NewDvd->GetPrice(), $NewDvd->GetAttribute(), $db->getdb());

}
