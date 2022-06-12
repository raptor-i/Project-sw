import React from 'react';
import { useEffect, useState } from 'react';
import './home.css';
import {useNavigate } from 'react-router-dom';
import Products from '../Product/Products';
import MassDeleteItems from '../util/massdelteitems';
import DeleteFromDB from "../util/Delete-from-db";
import DummyData from "../util/dummydata";

// The array that will fill fake product data if there is no db connection.
let Dummy_Data = DummyData();
function Home() {
  
  // UseState flag for fetching data with useEffect from Database if any data gets delete or add.
  const [fetchData, SetFetchData] = useState(1);
  
  // a navigate instance for jumping to the /addproduct page.
  let navigate = useNavigate(); 

  // useState for Product_array to add or delete some product. if there is no connection, it will filled up with
  //dump data.
  const [AllItems, SetAllItems] = useState(Dummy_Data);

  // it gets active when user clicks to Mass Delete button
  const DeleteBtn = () =>
  {
    // Gets the items ids from Mass Delete Items function and transfers to items variable.
    const items = MassDeleteItems();

    // if nothing selected then returns.
    if(items.length === 0)
      return;
    
    // sets as a parameter the items for deleting from database.
    DeleteFromDB(items);
    /*
    console.log("items : "+ items);
    let temp = [];
    Dummy_Data.forEach(x => temp.push(x.PrdID));
    items.forEach(x => 
      {
        if(temp.includes(x))
        {
          Dummy_Data =Dummy_Data.filter(y => y.PrdID != x);
        }
          
      });
      SetAllItems(Dummy_Data);
      */

    SetFetchData(0);
    
  };

  // gets products from database -like api- then sets main menu products with data that comes from database.
  useEffect(() => {fetch('http://localhost/php/?action=getproducts', 
                {method : "POST", action : "project"}
  ).then( res => res.json()).then(data => SetAllItems(data)).catch(error => console.log(error))}, 
    [fetchData]
  )

  return (
    
    <div className="App">
      <h1 className='HeadProduct'>Product List</h1>
      <input type="button"  id="delete-product-btn" className='DeleteBtn' value="MASS DELETE" onClick={DeleteBtn}/>
      <input type="button" id="ADD" value="ADD" onClick={() => navigate("/add-product")}/>
      <hr className='Line'/>
      <Products items={AllItems}/>
      <hr className='Line'/>
      
    </div>
    
  );
}

export default Home;
