import React from 'react';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import AddProduct from './pages/addproduct';
import Home from './pages/home';

function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="addproduct" element = {<AddProduct/>} />
    </Routes>
  </Router>
  );
}

export default App;
