import React from "react"
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
import Buy from "./components/Buy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Women from "./components/Women";
import Men from "./components/Men";
import About from "./components/About";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {

  return (
    <>
      <Navbar/>
      
      <Routes> 
        <Route path="/T-Shirt-Store/" Component={Home}/>
        <Route path="/T-Shirt-Store/buy" Component={Buy}/>
        <Route path="/T-Shirt-Store/product/:pName" Component={Product}/>
        <Route path="/T-Shirt-Store/women" Component={Women}/>
        <Route path="/T-Shirt-Store/men" Component={Men}/>
        <Route path="/T-Shirt-Store/about" Component={About}/>
        <Route path="/T-Shirt-Store/contact" Component={Contact}/>
        <Route path="/T-Shirt-Store/cart" Component={Cart}/>
        <Route path="/T-Shirt-Store/checkout" Component={Checkout}/>
        <Route path="/T-Shirt-Store/login" Component={Login} />
        <Route path="/T-Shirt-Store/registration" Component={Registration} />
      </Routes>
     
      <Footer/>

    </> 
  );
}
export default App;