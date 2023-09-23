import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import CartSingleProduct from "./CartSingleProduct";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../context/CartContext";

const Cart = () =>{
    const {cart, clearCart, total_price, total_price_with_vat} = useCartContext();
    const [coupon, setCoupon] = useState(false);


    if(cart.length === 0){
        return (
            <>
                <div className="center">
                    <h1>You have no item in cart.</h1>
                    <h3>Click Here to Shopping</h3>
                    <NavLink className="btn cartbtn" to="/T-Shirt-Store/buy">Start Shopping</NavLink>
                </div>
            </>  
        )
    }

    return (
        <>
            <div className="marginLeftRight">
                <div className="pt-5 ">
                    <h4 className="pb-4">Cart</h4>
                    <div className="center mb-4"> 
                        <h4> <b>Shopping Cart</b> </h4>
                    </div>
                    <div className="container-fluid ">
                        <div className="row ">
                            <div className="col-md-8 ">
                                <div className="row CartSingleProductTitle">
                                    <div className="col-4">
                                        <p>Product</p>
                                    </div>
                                    <div className="col-5">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p>Price</p>
                                            </div>
                                            <div className="col-md-8">
                                                <p>Quantity</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="row">
                                            <div className="col-md-6 order-2 order-md-1">
                                                <p>Subtotal</p>
                                            </div>
                                            <div className="col-md-6 order-1 order-md-2">
                                                <p>Remove</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {
                                    cart.map((value, key)=>{
                                        return <CartSingleProduct key = {key}
                                               {...value} />

                                    })
                                }

                                <div className="row mt-2 mb-3">
                                    <div className="col-6">
                                        <NavLink className="btn cartbtn" to="/T-Shirt-Store/buy">Continue Shopping</NavLink>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn rightFloat clearbtn" onClick={()=> clearCart()}>Clear Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mobileMarginTop">
                                
                                    <div className="CartSingleProductTitle ">
                                        <p><b>Cart Totals</b></p>
                                    </div>
                                    <div className="threeSideBorder paddingLeftRight py-4">
                                        <div className="px-2">
                                            <p>Subtotal <span className="rightFloat">{<FormatPrice price={total_price}/>}</span></p>
                                        </div>
                                        <hr/>
                                        <div className="px-2">
                                            <p>Vat (15%)<span className="rightFloat">{<FormatPrice price={0.15 * total_price}/>}</span></p>
                                        </div>
                                        <hr/>
                                        <div className="px-2 ">
                                            <p>Total<span className="rightFloat">{<FormatPrice price={total_price_with_vat}/>}</span></p>
                                        </div>
                                        <hr/>
                                        {coupon === true ?
                                            (   <div className="row ">
                                                    <div className="col-8">
                                                        <input type="text" className="form-control" placeholder="Coupon code" name="coupon"/>
                                                    </div>
                                                    <div className="col-4">
                                                        <button className="btn cartbtn proceedbtn">Apply</button>
                                                    </div>
                                                </div>
                                            ):(
                                                <button className="btn" onClick={()=>setCoupon(true)}>Have Copon?</button>
                                            )
                                        }
                                        <NavLink className="btn cartbtn proceedbtn " to="/T-Shirt-Store/checkout">Proceed to checkout</NavLink>
                                    </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}
export default Cart;