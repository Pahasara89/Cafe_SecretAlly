import React,{useState} from "react"
//import '../App.css'
import axios from "axios"
import Swal from "sweetalert2";
import './UserLogin.css'
import {Link} from "react-router-dom";



export default function AdminRegistration(){

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        address: "",
        email: "",
        password: ""
    });

    const handleChange = ({ currentTarget: input }) => {
       setData({ ...data, [input.name]: input.value });
    };

    const sendData=async(e)=> {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/user/registration";
            const { data: res } = await axios.post(url, data);
            Swal.fire({
                title: "Success!",
                text: res.message,
                icon: "success",
                showConfirmButton: false,
            })
            setTimeout(() => {
                window.location = "/AdminLogin"
            }, 2000)
        }
        catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                //setError(error.response.data.message);
            }
        }
    }
    return(
        <div className="bodies99">
            <div className="containers99">
            {/* {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />} */}
                <form className='was-validated'onSubmit={sendData}>
                    <h3 className="text-center">Admin Registration</h3>
                    <div className="col-md-7 element">
                        <label>First Name :</label>
                        <input type="text" name="firstName" className="form-control" id="firstName" value={data.firstName} onChange={handleChange}/>
                    </div>
                    <div className="col-md-7 element">
                        <label>Last name :</label>
                        <input type="text" name="lastName" className="form-control" id="lastName" value={data.lastName} onChange={handleChange}/>
                    </div>
                    <div className="col-md-7 element">
                        <label>Phone :</label>
                        <input type="text" name="mobileNumber" className="form-control" id="mobileNumber" value={data.mobileNumber}onChange={handleChange}/>
                    </div>
                    <div className="col-md-7 element">
                        <label>Address :</label>
                        <input type="text" name="address" className="form-control" id="address" value={data.address} onChange={handleChange}/>
                    </div>
                    <div className="col-md-7 element">
                        <label>Email: </label>
                        <input type="email" name="email" className="form-control" id="email" value={data.email} onChange={handleChange}/>
                    </div>
                    <div className="col-md-7 element">
                        <label>Password: </label>
                        <input type="password" name="password" className="form-control" id="password" value={data.password} onChange={handleChange}/>
                    </div>
                        <center>
                        <input type="submit" value="Register" className="btn btn-outline-success" />
                        </center>
                    <br></br>
                    <br></br>
                        <br></br>
                        <p>Have a account already ?<Link to ='/UserLogin'><button>Sign In Now</button></Link></p>
                </form>
            </div>
        </div>
           
    )
}