import React from "react";
import web from "../src/images/10118.jpg";
import './index.css';
import Common from "./Common";
const Home =()=>{
    return(
        <>
        <Common name='Grow your Business with' imgsrc={web} visit='/service' btname="Get Started"/>
        </>

    );
};

export default Home;
