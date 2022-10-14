import React, { useState } from "react"
//import '../App.css'
import './AddOrders.css'
import HomeNavBar from "./HomeNavBar";
import Footer from "./Footer";
//import AdminNavBar from "./AdminNavBar";
import Swal from "sweetalert2";
import axios from "axios"

export default function AddOrders() {

    const [customerName, setcustomerName] = useState("");
    const [customerContactNumber, setcustomerContactNumber] = useState("");
    const [deliveryAddress, setdeliveryAddress] = useState("");

    function sendOrder(e) {
        e.preventDefault();

        const newOrder = {
            customerName,
            customerContactNumber,
            deliveryAddress
        }
        console.log(newOrder);

        axios.post("http://localhost:5000/order/addOrder", newOrder).then(() => {
            Swal.fire({
                title: "Success!",
                text: "Inserted Successfully",
                icon: "success",
                showConfirmButton: false,
            });
            //window.location = '/ViewDeliveries';
        }).catch((err) => {
            Swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",

            });
        });
        setTimeout(() => {
            window.location.replace("http://localhost:3000/add_Payment");
        }, 2000)

    }
        return(
            <>
            <div className="bodies">
                <HomeNavBar/>
           
            <div className="containers">
                
                <div className="row">
                <form className='was-validated'onSubmit={sendOrder}>
                    <br></br>
                    <div>
                    <h1>Checkout</h1>
                    <br></br>
                    <div>
                    <div className="col-md-7 element">
                        <label for="customerName">Customer Name</label>
                        <input type="text" name="customerName" className="form-control" id="customerName" placeholder="Enter Customer Name" required
                        onChange={(e)=>{
                            setcustomerName(e.target.value);
                        }}
                        />
                    </div>
                    <br />
                    <div className="col-md-7 element">
                        <label for="customerContactNumber">Customer Contact Number</label>
                        <input type="text" name="customerContactNumber" className="form-control" id="customerContactNumber" placeholder="Enter Customer Contact Number" required pattern="^[0-9]+$" maxlength="10"
                         onChange={(e)=>{
                            setcustomerContactNumber(e.target.value);
                        }}
                        />
                    </div>
                    <br />
                    <div className="col-md-7 element">
                        <label for="deliveryAddress">Delivery Address</label>
                        <input type="text" name="deliveryAddress" className="form-control" id="deliveryAddress" placeholder="Enter Delivery Address" required
                         onChange={(e)=>{
                            setdeliveryAddress(e.target.value);
                        }}
                        />
                    </div>
                    <br />
                    
                        <center>
                        <button type="submit" className="btn btn-outline-success">Sumbit</button>
                        </center>
                    <br />
                    </div>
                    </div>
    
                </form>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
        )
                        
}