import React from "react";
import Common from "./Common";
import web from "../src/images/4565.jpg";
const Home =()=>{
    return(
        <>
       <Common name='Welcome tp About Page' imgsrc={web} visit='/contact' btname="Contact Now"/>
        </>

    );
};

export default Home;