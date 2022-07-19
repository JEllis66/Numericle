import React from "react";
import Navigation from "../components/Navigation";
import DiscussionContent from "../components/Discussion/DiscussionContent";

import 'bootstrap/dist/css/bootstrap.min.css';

const Discussion = () => {


    return (
        <div>
            <Navigation/>
            <hr class="mt-0"/>
            <DiscussionContent/>
        </div>
    )



}

export default Discussion;