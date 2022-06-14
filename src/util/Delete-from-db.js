import axios from "axios";




const DeleteFromDB = (props) =>
{

    axios.post("https://raptor-i.000webhostapp.com/php/Database/deleteitems.php", props).then(response => console.log(response))
    .catch(error => console.log(error))

}
    

export default DeleteFromDB;