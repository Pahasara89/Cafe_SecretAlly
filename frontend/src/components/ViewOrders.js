import React, { useState, useEffect} from 'react';
import axios from "axios";


export default function ViewOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get("http://localhost:5000/order/view")
            console.log(data)
            setOrders(data)
        }
        getOrders();
    }, [])

    const handleproceedClick= (orderID, customerName, customerContactNumber, deliveryAddress)=>{
        localStorage.setItem("orderID", orderID);
        localStorage.setItem("customerName", customerName);
        localStorage.setItem("customerContactNumber", customerContactNumber);
        localStorage.setItem("deliveryAddress", deliveryAddress);
        window.location.href = "/AddDeliveries"
    }

    return (
        <div>
            <div className="container">
                <br></br>
                <h1 className="text-center">Checkout Details</h1>
                <br></br>
                <br></br>
                <div className="row">
                    <div>
                        <form>
                            <div>
                            <table className="table table-striped table borderd">
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer Name</th>
                                        <th>Customer Contact</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(orders =>
                                            <tr key={orders.orderID}> 
                                                <td> {orders.orderID}</td>                                          
                                                <td> {orders.customerName}</td>
                                                <td> {orders.customerContactNumber}</td>
                                                <td> {orders.deliveryAddress}</td>
                                                <td>
                                                <button type="button" onClick={()=>{handleproceedClick(orders.orderID, orders.customerName, orders.customerContactNumber, orders.deliveryAddress)}} className="btn btn-outline-success">Proceed</button>
                                                </td>                                   
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}