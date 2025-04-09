import React from "react";
import ReactDOM from "react-dom/client";
import Headercomponent from "./components/Headercomponent";
import BodyComponent from "./components/BodyComponent";

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