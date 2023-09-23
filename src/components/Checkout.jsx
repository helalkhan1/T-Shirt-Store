import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useCartContext } from "../context/CartContext";
import FormatPrice from "../Helpers/FormatPrice";
import CheckOutCart from "./CheckOutCart";

const Checkout = () =>{
    const {cart, total_price, total_price_with_vat} = useCartContext();

    const [inputFields, setInputFields] = useState([
        { id: 1, value: '', className: false },
        { id: 2, value: '', className: false },
        { id: 3, value: '', className: false },
        { id: 4, value: '', className: false },
        { id: 5, value: '', className: false },
      ]);
    
    const handleInputChange = (id, value) => {
        const updatedFields = inputFields.map((field) => {
          if (field.id === id) {
            field.value = value;
            if (value.match(/./)) {
              field.className = true;
            } else {
              field.className = false;
            }
          }
          return field;
        });
        setInputFields(updatedFields);
      };

      

    
    if(cart.length === 0){
        return (
            <>
                <div className="center">
                    <h1>You have no item in cart.</h1>
                    <h3>Click Here to Shopping</h3>
                    <NavLink className="btn cartbtn" to="/T-Shirt-Store/buy">Start Shopping</NavLink>
                </div>
            </>  
        );
    }

    return (
        <>
            <div className="marginLeftRight">
                <div className="pt-5 ">
                    <h4 className="pb-4">Checkout</h4>
                    <div className="center">
                        <h4><b>Checkout Details</b></h4>
                    </div>
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-md-7 ">
                                <h5><b>Customer Information</b></h5>
                                <div className="mb-3 mt-3">
                                    <div className={`inputBox  ${inputFields[0].className ? "inputPlaceHolder" : "" }`}>
                                        <input className="inputBorder"
                                            type="text"
                                            value={inputFields[0].value}
                                            onChange={(e) => handleInputChange(inputFields[0].id, e.target.value)}
                                        />
                                        <span>User Name or Email<sup>*</sup></span>
                                    </div>
                                </div>
                                <h5><b>Billing Information</b></h5>
                                <div className="row">
                                    <div className="col">
                                        <div className={`inputBox  ${inputFields[1].className ?  "inputPlaceHolder" : "" }`}>
                                            <input className="inputBorder"
                                                type="text"
                                                value={inputFields[1].value}
                                                onChange={(e) => handleInputChange(inputFields[1].id, e.target.value)}
                                            />
                                            <span>First Name<sup>*</sup></span>
                                        </div>  
                                    </div>
                                    <div className="col">
                                        <div className={`inputBox  ${inputFields[2].className ?  "inputPlaceHolder" : "" }`}>
                                            <input className="inputBorder"
                                                type="text"
                                                value={inputFields[2].value}
                                                onChange={(e) => handleInputChange(inputFields[2].id, e.target.value)}
                                            />
                                            <span>Last Name<sup>*</sup></span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`inputBox mt-4 ${inputFields[3].className ?  "inputPlaceHolder" : "" }`}>
                                    <input className="inputBorder"
                                        type="text"
                                        value={inputFields[3].value}
                                        onChange={(e) => handleInputChange(inputFields[3].id, e.target.value)}
                                    />
                                    <span>Your address<sup>*</sup></span>
                                </div>
                                <div className={`inputBox my-4 ${inputFields[4].className ?  "inputPlaceHolder" : "" }`}>
                                    <input className="inputBorder"
                                        type="phone"
                                        value={inputFields[4].value}
                                        onChange={(e) => handleInputChange(inputFields[4].id, e.target.value)}
                                    />
                                    <span>Phone number<sup>*</sup></span>
                                </div>
                                <h5><b>Payment</b></h5>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio1" name="optradio" value="cash" />Cash
                                    <label className="form-check-label" htmlFor="radio1"></label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio2" name="optradio" value="bkash"/>Bkash
                                    <label className="form-check-label" htmlFor="radio2"></label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio3" name="optradio" value="rocket"/>Rocket
                                    <label className="form-check-label" htmlFor="radio3"></label>
                                </div>    
                            </div>
                            <div className="col-md-5 px-3 mobileMarginTop " >
                                <h5><b>Your Order</b></h5>
                                <div className="row checkOutBorder py-2 bgColor">
                                    <div className="col-8 center">
                                        <p>Product</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p>Subtotal</p>
                                    </div>
                                </div>

                                {
                                    cart.map((value,key) => {
                                        return < CheckOutCart key = {key}
                                                {...value} />
                                    })
                                }
                                    
                                <div className="row threeSideBorder py-2">
                                    <div className="col-8 ">
                                        <p>SubTotal</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p>{<FormatPrice price={total_price}/>}</p>
                                    </div>  
                                </div>
                                <div className="row threeSideBorder py-2">
                                    <div className="col-8 ">
                                        <p>SubTotal (with 15% vat)</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p>{<FormatPrice price={total_price_with_vat}/>}</p>
                                    </div>  
                                </div>
                                <div className="row threeSideBorder py-2">
                                    <div className="col-8 ">
                                        <p>Shipping Fee</p>
                                    </div>
                                    <div className="col-4 ">
                                        <p>$10.00</p>
                                    </div>
                                </div>
                                <div className="row threeSideBorder py-2 bgColor">
                                    <div className="col-8 ">
                                        <h4>Total</h4>
                                    </div>
                                    <div className="col-4 ">
                                        <h4>{<FormatPrice price={total_price_with_vat +10}/>}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 mx-5 px-5">
                        <button type="submit" className="btn cartbtn proceedbtn">Order</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Checkout;