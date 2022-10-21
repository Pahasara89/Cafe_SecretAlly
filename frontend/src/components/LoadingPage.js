import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './LoadingPage.css'


export default function LoadingPage() {

    const handleproceedCus = () => {
        window.location.replace("http://localhost:3000/UserLogin");
    };

    const handleproceedAdmin = () => {
        window.location.replace("http://localhost:3000/AdminLogin");
    };

    
    return (
        <div className='body8'>
        <center>
        <button type="button" onClick={()=>{handleproceedCus()}} style={{marginTop:'300px'}} className="btn btn-success">I am a Customer</button>
        <button type="button" onClick={()=>{handleproceedAdmin()}} style={{ marginTop:'300px', marginLeft: "60px" }} className="btn btn-danger">I am an Admin</button>
        </center>

        </div>


    )
}