import React from "react";
import ReactDOM from "react-dom/client";

const Headercomponent = () =>{
    return(
        <div className="header">
            <div className="nav-logo-container">
                <img className="nav-logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>                    
                </ul>
            </div>
        </div>
    );
}

const ResCard = () =>{
    return(
        <div className="res-card">
            <img className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/13/d77d76e1-c0be-4adf-b674-b58d15cfe6db_46881.jpg" />
            <h3>Pista House</h3>
            <p><span>4.3</span> stars</p>
            <p>ETA: 45-50 mins</p>
            <p>Biryani, Cheese Pizza, Kebabs, Mughalai</p>
            <p>Kukatpally</p>
        </div>
    );
}

const BodyComponent = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
               <ResCard /> 
            </div>            
        </div>
    );
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Headercomponent />
            <BodyComponent />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("app"))

root.render(<AppLayout />)