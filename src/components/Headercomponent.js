import { useState } from "react";
import { LOGO_CDN } from "../utils/constants";

const Headercomponent = () =>{
    const [btnName,setBtnName] = useState("Login")

    return(
        <div className="header">
            <div className="nav-logo-container">
                <img className="nav-logo" src= {LOGO_CDN} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>       
                    <button className="login-button" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                        }
                    } >{btnName}</button>             
                </ul>                
            </div>
        </div>
    );
}

export default Headercomponent;