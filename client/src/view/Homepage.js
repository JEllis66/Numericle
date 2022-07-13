import React, {useState} from "react";
import Navigation from "../components/Navigation";
import Main from "../components/Main";


const Homepage = (props) => {


    return (
        <div>
            <Navigation/>
            <hr class="mt-0"/>
            {/* <AllProducts product = {product} setProduct = {setProduct}/> */}
            <Main/>
        </div>
    )



}

export default Homepage;