import axios from "axios";



//https://raptor-i.000webhostapp.com/php/Products/deleteitems.php
const DeleteFromDB = (props) =>
{

    axios.post("https://localhost/php/Products/deleteitems.php", props).then(response => console.log(response))
    .catch(error => console.log(error))

}
    

export default DeleteFromDB;