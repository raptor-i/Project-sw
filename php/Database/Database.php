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

    public function getdb()
    {
        return $this->db;
    }

    public function setdb($db)
    {
        return $this->db = $db;
    }
}
