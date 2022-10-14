/*import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import DeliveryAdminSideBar from './NavBar/DeliveryAdminSideBar';

export default function EditDelivery(props) {

     const [customerName, setcustomerName] = useState("");
     const [customerContactNumber, setcustomerContactNumber] = useState("");
     const [deliveryAddress, setdeliveryAddress] = useState("");
     const [orderCategory, setorderCategory] = useState("");
     const [quantity, setquantity] = useState("");
     const [driverName, setdriverName] = useState("");
     const [driverContactNumber, setdriverContactNumber] = useState("");
     const [deliveryDate, setdeliveryDate] = useState("");
     

    const { id } = useParams();

    useEffect(() => {
        function getDeliveries() {
            axios.get(`http://localhost:8070/delivery/get/${id}`).then(async(res) => {

                if (res.data.status) {
                    setcustomerName(res.data.delivery.customerName);
                    setcustomerContactNumber(res.data.delivery.customerContactNumber);
                    setdeliveryAddress(res.data.delivery.deliveryAddress);
                    setorderCategory(res.data.delivery.orderCategory);
                    setquantity(res.data.delivery.quantity);
                    setdriverName(res.data.delivery.driverName);
                    setdriverContactNumber(res.data.delivery.driverContactNumber);
                    setdeliveryDate(res.data.delivery.deliveryDate);
                }
            }).catch((err) => {
                alert(err);
            });
        }
        getDeliveries();
    }, []);
    

    function update(e) {

        e.preventDefault();

        const data = {
            customerName,
            customerContactNumber,
            deliveryAddress,
            orderCategory,
            quantity,
            driverName,
            driverContactNumber,
            deliveryDate
        };

        axios.put(`http://localhost:8070/delivery/update/${id}`, data).then(() => {
            alert("Delivery Details Updated Successfully.")
           window.location = '/ViewDeliveries';    
        }).catch((err) => {
           alert(err)       
       });

        
    }


    return(
        <div>
            <AdminNavBar/>
            <DeliveryAdminSideBar/>
       
        <div className="containers">
            
            <div className="row">
            <form onSubmit={update}>
                <h1 className="text-center">Update Delivery Details</h1>
                <br></br>
                <div className="card col-md-6 offset-md-3 offset-md-3">
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
                    <input type="text" name="customerContactNumber" className="form-control" id="customerContactNumber" placeholder="Enter Customer Contact Number" required
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
                    <input type="text" name="quantity" className="form-control" id="quantity" placeholder="Enter Order Quantity" required
                     onChange={(e)=>{
                        setquantity(e.target.value);
                    }}/>
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
    )

}*/

import React from 'react'

const EditDelivery = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>

            </td>
            <td>
            <input type="text" name="customerName" className="form-control" value={editFormData.customerName} placeholder="Enter Customer Name" required="requird"
                     onChange={handleEditFormChange}/>           
            </td>
            <td>
            <input type="text" name="orderID" className="form-control" value={editFormData.orderID} placeholder="Enter Order ID" required="requird"
                     onChange={handleEditFormChange}/>           
            </td>
            <td>
            <input type="text" name="customerContactNumber" className="form-control" value={editFormData.customerContactNumber} placeholder="Enter Customer Contact Number" required
                    onChange={handleEditFormChange}/>
                    
            </td>
            <td>
            <input type="text" name="deliveryAddress" className="form-control" value={editFormData.deliveryAddress} placeholder="Enter Delivery Address" required
                    onChange={handleEditFormChange}/>
            </td>
            <td>
            <select name="noofOrders" className="form-select" value={editFormData.noofOrders}
                     onChange={handleEditFormChange}>
                        <option>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
            </td>
            <td>
            <select name="driverName" className="form-select" value={editFormData.driverName}
                    onChange={handleEditFormChange}>
                        <option>Choose...</option>
                        <option>Kumara Silva</option>
                        <option>Tharindu Dilshan</option>
                        <option>Kasun Chamara</option>
                        <option>Sudeepa Kumara</option>
                        <option>Mohammed Amir</option>
                    </select>
            </td>
            <td>
            <select name="driverContactNumber" className="form-select" value={editFormData.driverContactNumber}
                     onChange={handleEditFormChange}>
                        <option>Choose...</option>
                        <option>Kumara-0771221220</option>
                        <option>Tharindu-0771331331</option>
                        <option>Kasun-0771441442</option>
                        <option>Sudeepa-0771551553</option>
                        <option>Amir-0771661664</option>
                    </select>
            </td>
            <td>
            
            
            </td>
            <td>
                <button type="submit" className="btn btn-outline-success">Save</button>
                <button type="button" onClick={handleCancelClick} className="btn btn-outline-danger">Cancel</button>
            </td>
        </tr>
    )
} 

export default EditDelivery;