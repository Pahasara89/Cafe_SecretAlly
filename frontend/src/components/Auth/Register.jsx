import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../Auth/context/userContext";
import ErrorNotice from "../misc/ErrorNotice";
import NavBar from '../NavBar';

function Register () {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {email, password, passwordCheck, firstName, lastName, gender, address, phone};
            await axios.post("http://localhost:3000/user/register", newUser);
            const loginResponse = await axios.post("http://localhost:3000/user/login", {
                email, password
            });
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            alert("Registration successful");
            localStorage.setItem("auth-token", loginResponse.data.token);
            history("/login");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
            alert(err.message);
        }
        
    };
   
    return ( 
        <div>
            <NavBar/>
        <div className="container">
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <div style={{marginTop:50, marginBottom:50}}>
                <form onSubmit={submit}>
                    <div style={{marginLeft:590}}>
                        <img
                        src={require("../../images/Admin.jpg")}   width="110px"  height="100px" alt ="" ></img>
                    </div>
                    <h3 className="text-center">Register</h3>
                    <div className="mb-3" style={{marginLeft:300, marginRight:300}}>
                        <label>First Name :</label>
                        <input type="text" className="form-control" id="first-name" onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="mb-3" style={{marginLeft:300, marginRight:300}}>
                        <label>Last name :</label>
                        <input type="text" className="form-control" id="last-name" onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className="mb-3" style={{marginLeft:300, marginRight:300}}>
                        <label>Email: </label>
                        <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3" style={{marginLeft:300, marginRight:300}}>
                        <label>Password: </label>
                        <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3" style={{marginLeft:300, marginRight:300}}>
                        <label>Confirm Password: </label>
                        <input type="password" className="form-control" id="passwordCheck" onChange={e => setPasswordCheck(e.target.value)}/>
                    </div>
                    <div className="mb-3" style={{marginLeft:300, marginRight:300}}>
                        <label>Gender :</label>
                        <input type="text" className="form-control" id="gender" onChange={e => setGender(e.target.value)}/>
                    </div>
                    <div className="mb-3" style={{marginLeft:300, marginRight:300}}>
                        <label>Address :</label>
                        <input type="text" className="form-control" id="address" onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div className="mb-3" style={{marginLeft:300, marginRight:300}}>
                        <label>Phone :</label>
                        <input type="text" className="form-control" id="phone" onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className="d-grid" style={{marginLeft:500, marginRight:500}}>
                    <button type="submit" value="Register" className="btn btn-primary">Register</button>
                </div>
                    <div style={{marginLeft:900,marginTop:10,fontSize:14}}>
                        <p>Have a account already ?<Link to="/login" class="nav-link">Sign In Now</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
        );
}
 
export default Register;