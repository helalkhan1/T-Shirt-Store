
import React from "react";
import Card from "./Card";
import "./style.css"
import { useProuctContext } from "../context/ProuctContext";

const Women = () => {
    const {women} = useProuctContext();
    
    return (
        <>
            <div className="marginLeftRight">
                <div className="center ">
                    <p>  Collection for Women</p>
                    <h2><b>Women's T-Shirts</b></h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                                
                        {                     
                            women.map((value, index) => {
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
};
export default Women;