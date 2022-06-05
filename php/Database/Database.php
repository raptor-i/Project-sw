<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: text/plain');

class database
{

    private $db;

    public function __construct()
    {

        try {
            $this->db = new PDO("mysql:host = localhost; dbname = project", "root");
        } catch (PDOException $e) {
            die($e->getMessage());
            echo "Couldn't connected to database.";
        }
    }

    public function GetDatas()
    {

        $data = json_decode(file_get_contents("php://input", true));

        if (isset($_GET['action'])) {
            $action = $_GET['action'];
            switch ($action) {
                case 'getproducts':
                    $query = $this->db->query("select * from project.products order by PrdID Asc")->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($query);
                    break;
            }
        }
    }

    public function DeleteData($ID)
    {
        $prdid = 0;
        for ($i = 0; $i < count($ID); $i++) {
            $prdid = $ID[$i];
            $this->db->query("delete from project.products where PrdID = $prdid ");
        }
        echo "sucessed + $ID";
    }


    public function AddData($SKU, $Name, $Price, $Attr)
    {

        $Price = intval($Price);
        $sql = "Insert into project.products(Sku, Name, Price, Attribute) Values('$SKU','$Name','$Price','$Attr')";
        $que = $this->db->prepare($sql);
        $que->execute();

    }

    public function getdb()
    {
        return $this->db;
    }

    public function setdb($db)
    {
        return $this->db = $db;
    }
}
