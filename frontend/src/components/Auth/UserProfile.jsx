import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeNavBar from '../HomeNavBar';

function UserProfile() {
    const [userDetails, setUserDetails] = useState({
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        address:"",
        phone:""
    });
    const history = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        axios.get("http://localhost:3000/user/",{headers :{'x-auth-token':`${token}`}}).then(res =>{
            console.log(res.data);
            setUserDetails(res.data);
        })
        // .then(jsonres => setUserDetails(jsonres));
    },[]);

    function DeleteUser(){
        const token = localStorage.getItem("auth-token");
        axios.delete("http://localhost:3000/user/delete",{headers :{'x-auth-token':`${token}`}}).then(res =>{
            console.log(res.data);
            console.log("User Deleted Successfully!")
        })
    }
    
    function logOut(){
        localStorage.setItem("auth-token","");
        localStorage.setItem("userId","");

        history("/login");
    }
    return (
        <div>
            <HomeNavBar/>
           
            <div className='container'style={{marginBottom:50}}>
                <div className='row'>
                    <div className='col'>
                        <div style={{marginLeft:100, marginTop:100}}>
                            <img src={require("../../images/Admin.jpg")} 
                            width="310px"
                            height="300px"
                            alt="profils pic" />
                        </div>
                    </div>
                    <div className='col' style={{ marginTop:50}}>
                        <h1>User Profile</h1>
                        <form>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>First Name :</label>
                                <input type="text" className="form-control" id="first-name" defaultValue={userDetails.firstName}/>
                            </div>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>Last name :</label>
                                <input type="text" className="form-control" id="last-name" defaultValue={userDetails.lastName}/>
                            </div>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>Email: </label>
                                <input type="email" className="form-control" id="email" defaultValue={userDetails.email}/>
                            </div>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>Gender :</label>
                                <input type="text" className="form-control" id="gender" defaultValue={userDetails.gender}/>
                            </div>
                            <div className="mb-3"style={{marginLeft:20, marginRight:20}}>
                                <label>Address :</label>
                                <input type="text" className="form-control" id="address" defaultValue={userDetails.address}/>
                            </div>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>Phone :</label>
                                <input type="text" className="form-control" id="phone" defaultValue={userDetails.phone}/>
                            </div>
                        </form>
                        <div className="d-grid">
                            <input type="button" value="Delete" onClick={() => DeleteUser()} className="btn btn-danger"/>
                        </div>
                        <div className="d-grid">
                            <input type="button" style={{marginTop:20}} value="Logout" onClick={() => logOut()} className="btn btn-warning"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default UserProfile;