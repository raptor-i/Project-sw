import React, { useEffect, useState } from "react";
import "./addproduct.css";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DummyData from "../util/dummydata";
import AllSkuNames from '../util/AllSkuNames';

let Dummy_Data = DummyData();
const AllSku = AllSkuNames();
const AddProduct = () => {

  // useStates for each input box.
  const [enteredWeight, SetEnteredWeight] = useState("");
  const [enteredSize, SetEnteredSize] = useState("");
  const [enteredHeight, SetEnteredHeight] = useState("");
  const [enteredWidth, SetEnteredWidth] = useState("");
  const [enteredLenght, SetEnteredLenght] = useState("");
  const [enteredSku, SetEnteredSku] = useState("");
  const [enteredName, SetEnteredName] = useState("");
  const [enteredPrice, SetEnteredPrice] = useState("");
  const [TypeName, setTypeName] = useState("default");

  // an useState for the form which will appear when selected an option through TypeSwitcher.
  const [TypeForm, SetTypeForm] = useState(<p></p>);

  // a navigate for jumping to the home page.
  let navigate = useNavigate();

  // Gets data from input box and updates it to the new value.
  const WeightOnChange = (event) => {
    SetEnteredWeight(event.target.value);
  };

  // Gets data from input box and updates it to the new value.
  const SizeOnChange = (event) => {
    SetEnteredSize(event.target.value);
  };

  // Gets data from input box and updates it to the new value.
  const HeightOnChange = (val) => {
    SetEnteredHeight(val.target.value);
  };

  // Gets data from input box and updates it to the new value.
  const WidthOnChange = (event) => {
    SetEnteredWidth(event.target.value);
  };

  // Gets data from input box and updates it to the new value.
  const LenghtOnChange = (event) => {
    SetEnteredLenght(event.target.value);
  };

  // Gets data from input box and updates it to the new value.
  const NameOnChange = (event) => {
    SetEnteredName(event.target.value);
  };

  // Gets data from input box and updates it to the new value.
  const PriceOnChange = (event) => {
    SetEnteredPrice(event.target.value);
  };

  // Gets data from input box and updates it to the new value.
  const SkuOnChange = (event) => {
    SetEnteredSku(event.target.value);
  };

  // the form for dvd when it selected through TypeSwitcher.
  const dvdForm = () => {

      return (
        <div>
          <br />
          <label className="LabelSize">Size (MB)</label>
          <input
            name="size"
            id="size"
            type="text"
            defaultValue={enteredSize}
            onChange={SizeOnChange}
          ></input>
          <br />
          <b className="dvdDescr">Please, provide DVD size in MB.</b>
        </div>
      );
  };
  
  // the form for Book when it selected through TypeSwitcher.
  const bookForm = () => {
      return (
        <div>
          <br />
          <label className="LabelSize">Weight (Kg)</label>
          <input
            name="weight"
            id="weight"
            defaultValue={enteredWeight}
            onChange={WeightOnChange}
          ></input>
          <br />
          <b className="BookDescr">Please, provide book weight in Kg.</b>
        </div>
      );
  };
  
  // the form for Furniture when it selected through TypeSwitcher.
  const FurnForm = () => {
      return (
        <div>
          <br />
          <label className="LabelSize">Height (CM)</label>
          <input
            name="height"
            id="height"
            defaultValue={enteredHeight}
            onChange={HeightOnChange}
          ></input>
          <br />
          <label className="LabelSize">Width (CM) </label>
          <input
            name="width"
            id="width"
            defaultValue={enteredWidth}
            onChange={WidthOnChange}
          ></input>
          <br />
          <label className="LabelSize">Length (CM)</label>
          <input
            id="length"
            name="length"
            defaultValue={enteredLenght}
            onChange={LenghtOnChange}
          ></input>
          <br />
          <b className="dvdDescr">Please, provide Dimension in HxWxL.</b>
        </div>
      );
  };
  
  const Type = (e) => {

    let Value = e.target.value;
      // it sets useState depends on the chosen option
      if (Value === "DVD") {
        SetTypeForm(dvdForm);
        setTypeName("dvd");
      }
      else if (Value === "Furniture") {
        SetTypeForm(FurnForm);
        setTypeName("furniture");
      }
      else if (Value === "Book") {
        SetTypeForm(bookForm);
        setTypeName("book");
      }
      else
      {
        SetTypeForm();
        setTypeName("default");
      }
  };

  // this function handles validation when user tries to submit/add product. if it fails an alert message appears
  const validation = () => {
    // three flags for check
    let EmptyBox = false;
    let invalidData = false;
    let SkuExist = false;

    // checks product's simple requirements. if any box is empty, flag gets set to true.
    if (enteredSku === "" ||enteredName === "" ||enteredPrice === "" || TypeName === "default")
      EmptyBox = true;

    // checks if enteredSku is already exist in db. if it is Sku Exist gets set true;
    if(AllSku.includes(enteredSku))
      SkuExist = true;

    // This if statement converts the string enteredPrice to Float then converts again to String. Finally compares
    //first data and if there is any difference then it sets the invalidData flag.
    if(parseFloat(enteredPrice).toString() !== enteredPrice)
      invalidData = true;

    // checks type switcher's value. Then checks input box that belongs this SwitchType.
    if (TypeName === "dvd") {
      if (enteredSize === "") 
        EmptyBox = true; 
 
    // This if statement converts the string EnteredSize to Float then converts again to String. Finally compares
    //with first data and if there is any difference then it sets the invalidData flag.
      if(parseFloat(enteredSize).toString() !== enteredSize)
        invalidData = true;
    }
    
    // checks type switcher's value. Then checks input box that belongs this SwitchType.
    if (TypeName === "book") {
      if (enteredWeight === "") 
        EmptyBox = true;
      
    // This if statement converts the string EnteredWeight to Float then converts again to String. Finally compares
    //with first data and if there is any difference then it sets the invalidData flag.
      if(parseFloat(enteredWeight).toString() !== enteredWeight) 
        invalidData = true;
    }

    // checks type switcher's value. Then checks input box that belongs this SwitchType.
    if (TypeName === "furniture") {
      if (enteredHeight === "" || enteredLenght === "" || enteredWidth === "")
        EmptyBox = true;

    // This if statement converts the string EnteredHeight, enteredLenght and EnteredWidth to Float then converts 
    //again to String. Finally compares with first data and if there is any difference then it sets the invalidData flag.
      if(parseFloat(enteredHeight).toString() !== enteredHeight || parseFloat(enteredLenght).toString() !== enteredLenght ||
        parseFloat(enteredWidth).toString() !== enteredWidth)
        invalidData = true;
    }

    // Function finally returns two of flags.
    return { IsEmpty : EmptyBox, IsNotDataType : invalidData, IsSkuExist : SkuExist};
  };

  // This function is called when save button clicked.
  const SaveBtn = () => {

    // validation function's return values are transferred to IsNotValid data.
    let IsNotValid = validation();

    // calls alert when there is any empty box.
    if (IsNotValid.IsEmpty){
      alert("Please, submit required data");
      return;
    }

    // calls alert when there is invalid datatype in any box.
    if(IsNotValid.IsNotDataType){
      alert("Please, provide the data of indicated type");
      return;
    }
  
    // calls alert when there is exist sku name given.
    if(IsNotValid.IsSkuExist){
      alert("This Sku name is already exist. Please set another name.");
      return;
    }

    return "Successed";
  };

  const FormSubmitHandler  = (e) =>
    {
      e.preventDefault();

      // data which is will be send to back-end.
      const DataObj = {
        SKU : enteredSku,
        Name : enteredName,
        Price : enteredPrice,
        Attribute : ""
      }

      // a statement to get if it is not succeed.
      if(SaveBtn() !== "Successed")
        return;
      
      // a switch case for determine which data will be send to database.
      switch (TypeName)
      {
        case "dvd":
          DataObj.Attribute = enteredSize;
          Dummy_Data.push(DataObj);
          axios.post("https://localhost/php/Products/Dvd.php",DataObj).then(Response => console.log(Response))
          .catch(error => console.log(error));
          break;

        case "book":
          DataObj.Attribute = enteredWeight;
          Dummy_Data.push(DataObj);
          axios.post("https://localhost/php/Products/Book.php",DataObj).then(Response => console.log(Response))
          .catch(error => console.log(error));
          break;

        case "furniture":
          DataObj.Attribute = enteredHeight + " " + enteredWidth + " " + enteredLenght;
          Dummy_Data.push(DataObj);
          axios.post("https://localhost/php/Products/Furniture.php",DataObj).then(Response => console.log(Response))
          .catch(error => console.log(error));
          break;
      }

      console.log(DataObj);
      navigate("/");
      //window.location.reload();
    } 

  return (
 
      <form name="product_form" id="product_form" onSubmit={FormSubmitHandler}>
        <h1 className="Header">Product Add</h1>
        <input
          type="button"
          value="Cancel"
          className="CancelBtn"
          onClick={() => navigate("/")}
        />
        <input
          type="submit"
          value="Save"
          className="SaveBtn"
        />
        <hr className="line" />
        <div className="field">
          <label className="label">SKU</label>
          <input
            type="text"
            name="sku"
            id="sku"
            value={enteredSku}
            onChange={SkuOnChange}
          />
          <br />
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={enteredName}
            onChange={NameOnChange}
          />
          <br />
          <label className="label">Price ($) </label>
          <input
            className="inputfieldPrice"
            name="price"
            id="price"
            value={enteredPrice}
            onChange={PriceOnChange}
          />
          <br />
            <label className="label">Type Switcher</label>
              <select id="productType" onChange={Type}>
                <option value="default">Select an option</option>
                <option value="DVD" >DVD</option>
                <option value="Book" >Book</option>
                <option value="Furniture">Furniture</option>
              </select>
        </div>
        {TypeForm}
        <hr className="line" />
      </form>
  );
};

export default AddProduct;
