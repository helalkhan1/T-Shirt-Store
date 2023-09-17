import React from 'react'
import { NavLink } from "react-router-dom";
import "./style.css";
import FormatPrice from '../Helpers/FormatPrice';
import ModalProduct from "./ModalProduct";

const Modal = ({closeModal, cart, total_price, incrementCartCount, decrementCartCount, removeItem }) => {

    if(cart.length === 0){
        return (
            <> 
                <div className="modal-wrapper" onClick={closeModal}></div>
                <div className="modalContent " >
                    <div className="modelHeading ">
                        <h5>Shopping Cart<span className="rightFloat"><button className="crossbtn" onClick={closeModal}>X</button></span></h5>
                    </div>
                    <hr className="modalhr"/>
                    <div className="center mt-5">
                        <h1>You have no item in cart.</h1>
                        <h3>Click Here to Shopping</h3>
                        <NavLink className="btn cartbtn" to="/T-Shirt-Store/buy" onClick={closeModal} >Start Shopping</NavLink>
                    </div>
                </div>
            </>  
        )
    }
   
      return(
        <>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <div className="modalContent " >
                <div className="modelHeading ">
                    <h5>Shopping Cart<span className="rightFloat"><button className="crossbtn" onClick={closeModal}>X</button></span></h5>
                </div>
                <hr className="modalhr"/>
                <div className="modalProducts">
                    <div className="modelHeading">
                        {
                            cart.map((value, index) => {
                                return <ModalProduct key = {index}
                                        {...value} incrementCartCount={incrementCartCount} decrementCartCount={decrementCartCount} removeItem={removeItem}
                                />
                            })
                        }

                    </div>
                </div>
                <div className="modalFooter">
                    <hr className="modalhr"/>
                    <div className="modelHeading">
                        <p>Subtotal <span className="rightFloat">{<FormatPrice price={ total_price}/>}</span></p>
                    </div>
                    <hr className="modalhr"/>
                    <div className="modelHeading">
                        <NavLink className="btn cartbtn proceedbtn mb-3" to="/T-Shirt-Store/cart" onClick={closeModal}>View Cart</NavLink><br/>
                        <NavLink className="btn cartbtn proceedbtn mb-3" to="/T-Shirt-Store/checkout" onClick={closeModal} >Checkout</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Modal;