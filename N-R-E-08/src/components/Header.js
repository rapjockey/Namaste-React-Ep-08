import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () =>{
    const [LogBtn , setLogbtn] = useState ("Login")
    return (
       <div className="head">
            <div className="logo">
                <img className="logo-img" src={LOGO_URL}/>
            </div>
            <div className="navbar">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn"
                        onClick={() => {
                        LogBtn === "Login" ?  setLogbtn("Log Out") : setLogbtn("Login");
                        }}
                    >{LogBtn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;