import React, { useState } from "react";
import axios from "axios";
import HomeNavBar from "./HomeNavBar";
import './Feedback.css'
import swal from "sweetalert2";



export default function AddComplaint() {

    const [first_name, setFname] = useState("");
    const [last_name, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [complaint, setComplaint] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        let newComplaint = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            complaint: complaint
        }

        axios.post("http://localhost:5000/customer/add", newComplaint).then(() => {
            swal.fire({
                title: "Success!",
                text: "Thank you! Your feedback",
                icon: "success",
                showConfirmButton: false,
            });
        }).catch((err) =>{
            swal.fire({
                title: "Error!",
                text: "Couldn't insert your Details",
                icon: "error",
            });
        })

        setTimeout(()=>{
            window.location.reload();
        },1500)


        setFname("");
        setLname("");
        setEmail("");
        setComplaint("");

    }

    return (
        <>
        <HomeNavBar />
        <div className="bodys">
            <div className="conta">
                <h2>Add Feedback</h2>

                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="first name">First Name</label>
                        <input type="text" className="form-control" id="fname" required placeholder="Enter First Name"
                            onChange={(e) => {
                                setFname(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label for="last name">Last Name</label>
                        <input type="text" className="form-control" id="lname" required placeholder="Enter Last Name"
                            onChange={(e) => {
                                setLname(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label for="Email">Email address</label>
                        <input type="email" className="form-control" id="Email1" required placeholder="Enter email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label for="complaint">Complaint</label>
                        <input type="text" className="form-control" id="complaint" required placeholder="Enter Your Complaint"
                            onChange={(e) => {
                                setComplaint(e.target.value);
                            }} />
                    </div>
                    <div class="centerb"><button type="submit" className="btn btn-primary">Submit</button></div>
                </form>
            </div>
            </div>
        </>

    )
}
