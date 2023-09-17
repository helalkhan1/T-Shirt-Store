import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

const Registration = () => {

    const [inputFields, setInputFields] = useState([
        { id: 1, value: '', className: false },
        { id: 2, value: '', className: false },
        { id: 3, value: '', className: false },
        { id: 4, value: '', className: false },
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

    return (
        <>
            <div className="loginForm py-4">
                <div className="formBox">
                    <div className="center"><h2>Registration</h2><hr/></div>
                    <div className="formInput">
                        <div className= {`inputBox  ${inputFields[0].className ? "loginInputPlaceHolder" : "" }`}>
                            <input className="inputBottomBorder"
                                type="text"
                                value={inputFields[0].value}
                                onChange={(e) => handleInputChange(inputFields[0].id, e.target.value)}                   
                            />
                            <span>Phone number or Email</span>
                        </div>
                        <div className={`inputBox mt-2 ${inputFields[1].className ? "loginInputPlaceHolder" : "" }`}>
                            <input className="inputBottomBorder"
                                type="text"
                                value={inputFields[1].value}
                                onChange={(e) => handleInputChange(inputFields[1].id, e.target.value)}                   
                            />
                            <span>Name</span>
                        </div>
                        <div className={`inputBox mt-2 ${inputFields[2].className ? "loginInputPlaceHolder" : "" }`}>
                            <input className="inputBottomBorder"
                                type="password"
                                value={inputFields[2].value}
                                onChange={(e) => handleInputChange(inputFields[2].id, e.target.value)}                    
                            />
                            <span>Password</span>
                        </div>
                        <div className={`inputBox mt-2 ${inputFields[3].className ? "loginInputPlaceHolder" : "" }`}>
                            <input className="inputBottomBorder"
                                type="password"
                                value={inputFields[3].value}
                                onChange={(e) => handleInputChange(inputFields[3].id, e.target.value)}                   
                            />
                            <span>Retype Password</span>
                        </div>
                        <div className="my-4 px-4">
                            <NavLink className="btn cartbtn proceedbtn mb-2" to="/login1">Register</NavLink>
                        </div>
                        <div className="loginFormBottom">
                            <p>Do you have any account? <NavLink className="" to="/login">Login</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Registration