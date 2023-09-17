import React, { useState }  from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartPlusFill } from 'react-icons/bs';
import "./style.css";
import Modal from "./Modal";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart, total_price, total_item, incrementCartCount, decrementCartCount, removeItem } = useCartContext();
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-white bg-white ">
        <div className="container-fluid mt-2">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-md-none">
            <div className=" logo ">
              <h4><u>T-SHIRTS</u></h4>
              <p> store</p>
            </div>

            <div className="row">
              <div className="col">
                {total_item === 0 ? (   <button className="nav-link"  onClick={()=>setModal(true)} ><BsFillCartPlusFill size="20px"/><sup> </sup></button>
                                    ):( <button className="nav-link"  onClick={()=>setModal(true)} ><BsFillCartPlusFill size="20px"/><sup>{total_item}</sup></button> )
                }
                { modal && <Modal closeModal={closeModal}  cart={cart} total_price={total_price} incrementCartCount={incrementCartCount} decrementCartCount={decrementCartCount} removeItem={removeItem} /> }
              </div>
              <div className="col">  <NavLink className="nav-link" to="/T-Shirt-Store/login">Login</NavLink></div>
            </div>
          </div>
          
          <div className="collapse navbar-collapse mx-4 " id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"> <NavLink className="nav-link " to="/T-Shirt-Store/">HOME</NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/T-Shirt-Store/buy">BUY T-SHIRTS</NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/T-Shirt-Store/women">WOMEN</NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/T-Shirt-Store/men">MEN</NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/T-Shirt-Store/about">ABOUT</NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/T-Shirt-Store/contact">CONTACT</NavLink> </li>
            </ul>

            <div className="d-none d-md-block">
              <div className=" logo ">
                <h4><u>T-SHIRTS</u></h4>
                <p> store</p>
              </div>

              <div className="row">
                <div className="col">
                  { total_item === 0 ? (  <button className="nav-link "  onClick={()=>setModal(true)} ><BsFillCartPlusFill size="20px"/><sup> </sup></button> 
                                      ):( <button className="nav-link "  onClick={()=>setModal(true)} ><BsFillCartPlusFill size="20px"/><sup>{total_item}</sup></button> )
                  }
                  { modal && <Modal closeModal={closeModal}  cart={cart} total_price={total_price} incrementCartCount={incrementCartCount} decrementCartCount={decrementCartCount} removeItem={removeItem} /> }
                </div>
                <div className="col"> <NavLink className="nav-link" to="/T-Shirt-Store/login">Login</NavLink> </div>
              </div>
            </div>
          </div>
        </div> 
      </nav>
      <hr/>
    </>  
  );
};
export default Navbar;