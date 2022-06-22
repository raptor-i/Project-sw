<?php
header("Access-Control-Allow-Origin: *");

abstract class product
{

    protected $SKU;
    protected $Name;
    protected $Price;
    protected $Attribute;

    public function __construct($SKU, $Name, $Price )
    {
        $this->SKU = $SKU;
        $this->Name = $Name;
        $this->Price = $Price;
    }
    


    abstract public function SetAttributeType($Attribute);

    public function GetProduct()
    {
        echo " \n" .$this->SKU . "  " . $this->Name . "  " . $this->Price . "  " . $this->Attribute;
    }

    public function GetSku()
    {
        return $this->SKU;
    }

    public function GetName()
    {
        return $this->Name;
    }

    public function GetPrice()
    {
        return $this->Price;
    }

    public function GetAttribute()
    {
        return $this->Attribute;
    }
}

class book extends product
{
    public function SetAttributeType($Attribute)
    {
        $this->Attribute = "Weight : $Attribute KG";
    }
}

class furniture extends product
{
    public function SetAttributeType($Attribute)
    {
        $AttrArray = explode(" ", $Attribute);
        $result = $AttrArray[0] . "x" . $AttrArray[1] . "x" . $AttrArray[2];
        $this->Attribute = "Dimension : $result";
    }
}

class DVD extends product
{
    public function SetAttributeType($Attribute)
    {
       $this->Attribute = "Size : $Attribute MB";
    }
}


class ProductDB extends product
{
    public function SetAttributeType($Attribute)
    {   
    }

    public function GetDatas($db)
    {
        $data = json_decode(file_get_contents("php://input", true));

        if (isset($_GET['action'])) {
            $action = $_GET['action'];
            switch ($action) {
                case 'getproducts':
                    $query = $db->query("select * from project.products order by PrdID Asc")->fetchAll(PDO::FETCH_ASSOC);
                    echo json_encode($query);
                    break;
            }
        }
    }

    public function DeleteData($ID, $db)
    {
        $prdid = 0;
        for ($i = 0; $i < count($ID); $i++) {
            $prdid = $ID[$i];
            $db->query("delete from project.products where PrdID = $prdid ");
        }
        echo "sucessed + $ID";
    }

    public function AddData($SKU, $Name, $Price, $Attr, $db)
    {

        $Price = intval($Price);
        $sql = "Insert into project.products(Sku, Name, Price, Attribute) Values('$SKU','$Name','$Price','$Attr')";
        $que = $db->prepare($sql);
        $que->execute();

    }

}