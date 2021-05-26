import React from 'react';
import { NavLink } from "react-router-dom";
 const Navbar =()=>{

    return(
        <>
<div className="container-fluid nav bg col-10">
    <div className='row col-10' >
        <div classname="col-10">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">MateRate</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                </div>
                <div className="collapse navbar-collapse navbar-nav ml-auto" id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0 " >
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/service">Service</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                </ul>
      
                </div>
            </nav>
        </div>
    </div>
</div>

        </>
    );


 };
 
 export default Navbar;