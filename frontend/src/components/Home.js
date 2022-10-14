import React, { useState,useEffect} from "react"
import Cards from './Cards';
import Footer from './Footer';
import HomeNavBar from './HomeNavBar';



export default function Home(){
    useEffect(() => {
        localStorage.removeItem("BanKName");
    }, [])

    return(
        <div className='back'>
            <HomeNavBar/>
            <Cards/>
            <Footer/>
        </div>
    )
}