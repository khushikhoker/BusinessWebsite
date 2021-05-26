import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';
const Common =(props)=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            
            <div className="row col-10 mx-auto mainn">
                <div className="col-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <p className="head">{props.name}</p> <b className="brand-name"> MateRate</b>
                    <h2 className='my-3'>We are the team of talented developer making websites</h2>
                    <div className="mt-3">
                            
                        <NavLink to={props.visit} className="btn btn-primary  btn-get-started">{props.btname}</NavLink>
                    </div>
                </div>
                <div class="col-7 order-1 ">
                    
                    <img src={props.imgsrc} className="ani" alt="Common img"/>
                </div>
            </div>
        </div>
        
        </section>
        </>

    );
};

export default Common;
