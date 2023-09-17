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
        <Route path="/" Component={Home}/>
        <Route path="/buy" Component={Buy}/>
        <Route path="/product/:pName" Component={Product}/>
        <Route path="/women" Component={Women}/>
        <Route path="/men" Component={Men}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/cart" Component={Cart}/>
        <Route path="/checkout" Component={Checkout}/>
        <Route path="/login" Component={Login} />
        <Route path="/registration" Component={Registration} />
      </Routes>
     
      <Footer/>

    </> 
  );
}
export default App;