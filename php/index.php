<?php 
header("Access-Control-Allow-Origin: *");

require_once "Database/Database.php";
require_once 'Products/Product.php';


$db = new database();
$db->GetDatas();

?>