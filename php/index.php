<?php 
header("Access-Control-Allow-Origin: *");

require_once "Database/Database.php";
require_once 'Products/Product.php';

// Db class instance
$db = new database();

// ProductDB instance which is extends from product class.
$product = new ProductDB("","","");

// Gets data from database.
$product->GetDatas($db->getdb());


?>