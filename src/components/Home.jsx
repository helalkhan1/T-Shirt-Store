import React from "react";
import { NavLink } from "react-router-dom";
import homeImage from "../images/homeImage.png"
import "./style.css"
import { useProuctContext } from "../context/ProuctContext";
import Card from "./Card";

const Home = () => {

    const { products} = useProuctContext();
    
    return (
        <>
            <div className="marginLeftRight mt-2">
                <div >
                    <div className="container-fluid home">
                        <div className="row">
                            <div className="col-md-6 order-2 order-md-1 homedescript">
                                <p> Welcome to t-shirt store.</p>
                                <h2>Modern. Fasionable.<br/>Aweasome.</h2>
                                <p>are available here.</p>
                                <NavLink className="btn homebtn" to="/T-Shirt-Store/buy">Shop Now</NavLink>
                            </div>
                            <div className="col-md-6 order-2 order-md-1 homeimg center">
                                <img src={homeImage} alt="Image is not supporting" />
                            </div>
                        </div>
                    </div> 
                    <div className=" mt-5">
                        <div className="center ">
                            <p> New Collection</p>
                            <h2><b>Popular T-Shirts</b></h2>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                
                                {   
                                    products.slice(0,4).map((value, index) => {
                                        return <Card key = {index}
                                            {...value}
                                        />
                                     })    
                                }
                        
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        </>
    );
};
export default Home;