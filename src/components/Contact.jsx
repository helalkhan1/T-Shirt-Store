import React from "react";
import "./style.css";
import {FaLocationPin} from "react-icons/fa6"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillTelephoneFill} from "react-icons/bs"

const Contact = () =>{

    return (
        <>
            <div className="marginLeftRight">
                <div className="py-5 ">
                    <div className="center pb-5 ">
                        <h1><b>Co<u>nta</u>ct</b></h1>
                        <p>You can contact us anytime. You can visit us or send feedback.</p>
                    </div>
                    <div className="container-fluid py-2 contact ">
                        <div className="row">
                            <div className="col-md-6 contactInfo py-2">
                                <div className="ms-4">
                                    <h3><b>Get in touch</b></h3>
                                    <p>For any query you can visit us or Email us or call us anytime.</p>
                                    <FaLocationPin  /> <span className="ps-2">B block, Banasree, Dhaka</span><br/>
                                    <HiOutlineMail /> <span className="ps-2 contactMail"><a href="mailto:contact@tshirtstore.com">contact@tshirtstore.com</a></span><br/>
                                    <BsFillTelephoneFill /><span className="ps-2"> 010000000000</span>
                                </div>      
                            </div>
                            <div className="col-md-6 bg-white py-4 px-4">
                                <div className="row ">
                                    <div className="col">
                                        <label htmlFor="fname">First Name</label>
                                        <input type="text" className="form-control" placeholder="Enter first name" name="fname"/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Enter last name" name="lname"/>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                                </div>
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" id="message" name="text"></textarea>
                                <div className="center mt-3">
                                    <button type="button" className="btn cartbtn proceedbtn">Submit</button> 
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
};
export default Contact;