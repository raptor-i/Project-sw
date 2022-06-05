import React from "react";
import Product from "./Product";
import "./ProductFrame.css";
import "./Product.js";

const Products = (props) => {
  if (props.items.length > 0) {
  }

  return (
    <div className="Frame">
      <ul>
        {props.items.sort((x,y) => x.PrdID - y.PrdID).map((product) => (
          <Product
            ID={product.PrdID}
            Sku={product.Sku}
            Name={product.Name}
            Price={product.Price}
            AttType={product.AttType}
            Attribute={product.Attribute}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
