import React from "react";
import Card from "./Card";
import "./style.css"
import { useProuctContext } from "../context/ProuctContext";

const Buy = () => {
   const { products } = useProuctContext();

    return (
        <>
            <div className="marginLeftRight">
                <div className="center ">
                    <p> Our Collection</p>
                    <h2><b>All available T-Shirts</b></h2>
                </div>
                <div className="container-fluid">
                    <div className="row">         
                        {                    
                            products.map((value, index) => {
                                return <Card key = {index}
                                    {...value}
                                />
                            })
                        }
                    </div>
                </div> 
            </div>
        </>
    );
}
export default Buy;