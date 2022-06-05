import React from 'react';
import { useEffect, useState } from 'react';
import './home.css';
import {useNavigate } from 'react-router-dom';
import Products from '../Product/Products';
import MassDeleteItems from '../util/massdelteitems';
import DeleteFromDB from "../util/Delete-from-db";

// The array that will fill fake product data if there is no db connection.
const Product_array = [
  {
    PrdID : 0,
    Sku : "TR512313",
    Name : "CdDvD",
    Price : "35",
    Attribute : "700",
    AttType : "Size  : 700MB"
  },
  {
    PrdID : 1,
    Sku : "JS4546",
    Name : "Furniture",
    Price : "100",
    Attribute : "50x90x70",
    AttType : "Dimension : 50x90x70"
  },
  {
    PrdID : 5,
    Sku : "Bk1534",
    Name : "Book",
    Price : "12",
    Attribute : "1",
    AttType : "Weight (KG) :"
  },
  {
    PrdID : 3,
    Sku : "Bk1534",
    Name : "Book",
    Price : "12",
    Attribute : "1",
    AttType : "Weight (KG) :"
  },
  {
    PrdID : 12,
    Sku : "Bk1534",
    Name : "Book",
    Price : "12",
    Attribute : "1",
    AttType : "Weight (KG) :"
  },
  {
    PrdID : 9,
    Sku : "Bk1534",
    Name : "Book",
    Price : "12",
    Attribute : "1",
    AttType : "Weight (KG) :"
  },
  {
    PrdID : 5,
    Sku : "Bk1534",
    Name : "Book",
    Price : "12",
    Attribute : "1",
    AttType : "Weight (KG) :"
  },
  {
    PrdID : 14,
    Sku : "Bk1534",
    Name : "Book",
    Price : "12",
    Attribute : "1",
    AttType : "Weight (KG) :"
  },
  {
    PrdID : 75,
    Sku : "Bk1534",
    Name : "Book",
    Price : "12",
    Attribute : "1",
    AttType : "Weight (KG) :"
  },
  {
    PrdID : 34,
    Sku : "Bk1534",
    Name : "Book",
    Price : "12",
    Attribute : "1",
    AttType : "Weight :"
  },
]

function Home() {
  
  // a navigate instance for jumping to the /addproduct page.
  let navigate = useNavigate(); 

  // useState for Product_array to add or delete some product. if there is no connection, it will filled up with
  //dump data.
  const [AllItems, SetAllItems] = useState(Product_array);

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
    
    window.location.reload();
  };

  // gets products from database -like api- then sets main menu products with data that comes from database.
  useEffect(() => {fetch('http://localhost/php/?action=getproducts', 
                {method : "POST", action : "project"}
  ).then( res => res.json()).then(data => SetAllItems(data)).catch(error => console.log(error))}, 
    []
  )

  return (
    
    <div className="App">
      <h1 className='HeadProduct'>Product List</h1>
      <input type="button" id='#delete-product-btn' className='DeleteBtn' value="MASS DELETE " onClick={DeleteBtn}/>
      <input type="button" className='AddBtn' value="ADD" onClick={() => navigate("/addproduct")}/>
      <hr className='Line'/>
      <Products items={AllItems}/>
      <hr className='Line'/>
      
    </div>
    
  );
}

export default Home;
