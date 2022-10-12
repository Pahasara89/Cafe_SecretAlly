import React,{useState} from "react"
//import '../App.css'
import axios from "axios"
import AdminNavBar from "./AdminNavBar";
import DeliveryAdminSideBar from "./NavBar/DeliveryAdminSideBar";
import './AddDeliveries.css';
import Swal from "sweetalert2";

export default function AddDeliveries(){

    const [customerName, setcustomerName] = useState("");
    const [customerContactNumber, setcustomerContactNumber] = useState("");
    const [deliveryAddress, setdeliveryAddress] = useState("");
    const [orderCategory, setorderCategory] = useState("");
    const [quantity, setquantity] = useState("");
    const [driverName, setdriverName] = useState("");
    const [driverContactNumber, setdriverContactNumber] = useState("");
    const [deliveryDate, setdeliveryDate] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newDelivery = {
            customerName,
            customerContactNumber,
            deliveryAddress,
            orderCategory,
            quantity,
            driverName,
            driverContactNumber,
            deliveryDate
        }
        console.log(newDelivery);

        axios.post("http://localhost:5000/delivery/addDelivery",newDelivery).then(()=>{
            Swal.fire({
                title: "Success!",
                text: "Inserted Successfully",
                icon: "success",
                showConfirmButton: false,               
            });
            //window.location = '/ViewDeliveries';
        }).catch((err)=>{
            Swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",

            });
        });
        setTimeout(() => {
            window.location.replace("http://localhost:3000/ViewDeliveries");
            }, 2000)
    
    }
    return(
        <div className="body">
            <AdminNavBar/>
            <DeliveryAdminSideBar/>
       
        <div className="containers01">
            
            <div className="row">
            <form className='was-validated'onSubmit={sendData}>
                <br></br>
                <div className="card col-md-4 offset-md-2 offset-md-2">
                <h1>Add New Deliveries</h1>
                <br></br>
                <div className="card-body">

                <div className="form-group">
                    <label for="customerName">Customer Name</label>
                    <input type="text" name="customerName" className="form-control" id="customerName" placeholder="Enter Customer Name" required
                    onChange={(e)=>{
                        setcustomerName(e.target.value);
                    }}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label for="customerContactNumber">Customer Contact Number</label>
                    <input type="text" name="customerContactNumber" className="form-control" id="customerContactNumber" placeholder="Enter Customer Contact Number" required pattern="^[0-9]+$" maxlength="10"
                     onChange={(e)=>{
                        setcustomerContactNumber(e.target.value);
                    }}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label for="deliveryAddress">Delivery Address</label>
                    <input type="text" name="deliveryAddress" className="form-control" id="deliveryAddress" placeholder="Enter Delivery Address" required
                     onChange={(e)=>{
                        setdeliveryAddress(e.target.value);
                    }}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label for="orderCategory">Order Category</label>
                    <select name="orderCategory" className="form-select" id="orderCategory"
                     onChange={(e)=>{
                        setorderCategory(e.target.value);
                    }}>
                        <option>Choose...</option>
                        <option>Pizza</option>
                        <option>Burgers</option>
                        <option>Shawarma</option>
                        <option>Hot dogs</option>
                    </select>
                </div>
                <br />
                <div className="form-group">
                    <label for="quantity">Order Quantity</label>
                    <input type="text" name="quantity" className="form-control" id="quantity" placeholder="Enter Order Quantity" required pattern="^[0-9]+$"
                     onChange={(e)=>{
                        setquantity(e.target.value);
                    }}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label for="driverName">Driver's Name</label>
                    <select name="driverName" className="form-select" id="driverName"
                     onChange={(e)=>{
                        setdriverName(e.target.value);
                    }}>
                        <option>Choose...</option>
                        <option>Kumara Silva</option>
                        <option>Tharindu Dilshan</option>
                        <option>Kasun Chamara</option>
                        <option>Sudeepa Kumara</option>
                        <option>Mohammed Amir</option>
                    </select>
                </div>
                <br />
                <div className="form-group">
                    <label for="driverContactNumber">Driver's Contact Number</label>
                    <select name="driverContactNumber" className="form-select" id="driverContactNumber"
                     onChange={(e)=>{
                        setdriverContactNumber(e.target.value);
                    }}>
                        <option>Choose...</option>
                        <option>Kumara-0771221220</option>
                        <option>Tharindu-0771331331</option>
                        <option>Kasun-0771441442</option>
                        <option>Sudeepa-0771551553</option>
                        <option>Amir-0771661664</option>
                    </select>
                    
                </div>
                <br />
                <div className="form-group" style={{ display: 'block' }}>
                        <label for="date">Delivery Date</label>
                        <input id="date" name="deliveryDate" className="form-control" label="Choose Delivery Date" type="date" InputLabelProps={{ shrink: true, }} required
                         onChange={(e)=>{
                            setdeliveryDate(e.target.value);
                        }} dateFormat="dd/MM/yyyy" minDate={new Date()} maxDate={new Date()}
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
    )
}