import React from 'react';
import {BrowserRouter as Router,Routes,Route, HashRouter,} from "react-router-dom";
import AddProduct from './pages/addproduct';
import Home from './pages/home';

function App() {
  
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="add-product" element = {<AddProduct/>} />
    </Routes>
  </HashRouter>
  );
}

export default App;
