import React, { useState, useContext } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";
import UserContext from "../Auth/context/userContext";
import ErrorNotice from "../misc/ErrorNotice";
import NavBar from '../NavBar';

function Login () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:5000/user/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            alert("Welcome to Cafe SecretAlly");
            localStorage.setItem("auth-token", loginResponse.data.token);
            localStorage.setItem("userId", loginResponse.data.user.id);
            history("/customer-home");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
            alert("Error")
        }
        
    };
    
    return (
        <div>
            <NavBar/>
        <div className="container">
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <div style={{marginTop:50}}>
            <form onSubmit={submit}>
                <div style={{marginLeft:540}}>
                <img
                src={require("../../images/Admin.jpg")}
                width="210px"
                height="200px"
                ></img>
                </div>
                <h3 className="text-center">Login</h3>
                <div className="mb-3" style={{marginLeft:400, marginRight:400}}>
                    <label>Email: </label>
                    <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3" style={{marginLeft:400, marginRight:400}}>
                    <label>Password: </label>
                    <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div style={{marginLeft:900,marginTop:10,fontSize:14}}>
                        <p>Not Register Yet?<Link to="/register" class="nav-link">Register Now</Link></p>
                </div>
                <div className="d-grid" style={{marginLeft:500, marginRight:500}}>
                    <button type="submit" value="Login" className="btn btn-primary">LOGIN</button>
                </div>
                
            </form>
            </div>
        </div>
        </div>
    );
}
 
export default Login;