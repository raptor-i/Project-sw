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

