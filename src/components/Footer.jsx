import React from "react";
import "./style.css";
import {  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Footer = () =>{

    return (
        <>
            <div className="marginLeftRight ">
                <div className="py-3">
                    <div className="center py-4  footer">
                        <h1><b>F<u>ollow u</u>s </b></h1>   
                        <div className="social-links">
					        <a href="#">  < FaFacebookF /> <p>FaceBook</p>  </a>
					        <a href="#">  < FaInstagram /> <p>Instagram</p> </a>
				            <a href="#">  < FaLinkedinIn/> <p>Linkedin</p>  </a>
                            <a href="#">  < FaTwitter   /> <p>Twitter</p>   </a>
  	 			        </div>
                    </div>
                    <div className="center py-4 bg-dark text-white">
                         <p>All copyright &copy;2023 T-Shirt Store. </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;