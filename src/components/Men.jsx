import React from "react";
import "./style.css"
import { useProuctContext } from "../context/ProuctContext";
import Card from "./Card";

const Men = () => {
    const { men} = useProuctContext();

    return (
        <>
            <div className="marginLeftRight">
                <div className="center ">
                    <p>  Collection for Men </p>
                    <h2><b>Men's T-Shirts</b></h2>
                </div>
                <div className="container-fluid">
                    <div className="row">

                        {
                            men.map((value, index) => {
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
export default Men;