import "./Product.css"
import React, { useState } from 'react';
import MassDeleteItems from "../util/massdelteitems.js";

const Product = (props) =>
{
   
// an useState for checkbox.
const [isChecked, setIsChecked] = useState(false);

// when an item selected by checkbox, it sends the data to a massdeleteitems function.
const CheckBoxHandler =() =>
{
    console.log(isChecked);
    setIsChecked(!isChecked);
    MassDeleteItems(props.ID);
    
};

 
    return(
        <div className="ProductMain">
            <input id ={props.ID} type="checkbox" className="delete-checkbox" onChange={CheckBoxHandler}/>
            <div className="Product">
                <h5 className="Sku">{props.Sku}</h5>
                <h5>{props.Name}</h5>
                <h5>{props.Price} $</h5>
                <h5>{props.AttType} {props.Attribute} </h5>
            </div>
        </div>
    )
}

export default Product;