import React, { useState,useEffect} from "react"
import Cards from './Cards';
import Footer from './Footer';
import HomeNavBar from './HomeNavBar';
import {Link} from "react-router-dom";

export default function ViewAdmin(){

    return(
        <div className='back'>
            <HomeNavBar/>
            <Cards/>
            <Link to="/view"><button type="submit" className="btn Addbtn" >Back to Table </button></Link>
            <Footer/>
        </div>
    )
}