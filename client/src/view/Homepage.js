import React, {useState} from "react";
import Navigation from "../components/Navigation";
import Main from "../components/Main";


const Homepage = (props) => {


    return (
        <div>
            <Navigation/>
            <hr className="mt-0"/>
            <Main/>
        </div>
    )



}

export default Homepage;