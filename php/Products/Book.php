<?php

header("Access-Control-Allow-Origin: *");

require_once "Product.php";
require_once "../index.php";


$postedData = json_decode(file_get_contents("php://input"));
print_r($postedData);
print_r($postedData->SKU . "  " . $postedData->Name . "  " . $postedData->Price . "   " . $postedData->Attribute);

if (isset($postedData)) {

    $NewBook = new book($postedData->SKU, $postedData->Name, $postedData->Price);
    $NewBook->SetAttributeType($postedData->Attribute);
    $product->AddData($NewBook->GetSku(), $NewBook->GetName(), $NewBook->GetPrice(), $NewBook->GetAttribute(), $db->getdb());
}
