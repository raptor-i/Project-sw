import axios from "axios";




const DeleteFromDB = (props) =>
{

    axios.post("http://localhost/php/database/deleteitems.php", props).then(response => console.log(response))
    .catch(error => console.log(error))

}
    

export default DeleteFromDB;