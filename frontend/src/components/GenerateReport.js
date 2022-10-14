import React, { useState, useEffect, Fragment, useRef } from 'react';
import axios from "axios";
import AdminNavBar from './AdminNavBar';
import DeliveryAdminSideBar from './NavBar/DeliveryAdminSideBar';
//import EditDelivery from './EditDelivery';
//import ViewDeliveryTable from './ViewDeliveryTable';
import { useReactToPrint } from "react-to-print"
//import Swal from "sweetalert2";
import styles from "./style.module.css";

export default function GenerateReport() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    });

    const [data, setData] = useState({
        fromDate: "",
        toDate: ""
    });

    //const [searchData, setSearchData] = useState([]);


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const [deliveries, setDeliveries] = useState([]);
    //const [q, setQ] = useState("");

    useEffect(() => {
        const getDeliveries = async () => {
            const { data } = await axios.get("http://localhost:5000/delivery/")
            console.log(data)
            setDeliveries(data)
        }
        getDeliveries();
    }, [])

    //const [editFormData, setEditFormData] = useState({
    //deliveryId: "",
    //customerName: "",
    //customerContactNumber: "",
    //deliveryAddress: "",
    //orderCategory: "",
    //quantity: "",
    //driverName: "",
    //driverContactNumber: "",
    //deliveryDate: "",
    //})

    //const handleEditFormChange = (e) => {
    //e.preventDefault();

    //const fieldName = e.target.getAttribute("name");
    //const fieldValue = e.target.value;

    //const newFormData = {...editFormData};
    //newFormData[fieldName] = fieldValue;

    //setEditFormData(newFormData);
    //}

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/delivery/search", {
                fromDate: data.fromDate,
                toDate: data.toDate,
            })
            .then((response) => {
                console.log(response.data);
                setDeliveries(response.data);
            });
    };

    const clearData = () => {
        window.location.reload(false);
    };



    return (
        <div>
            <AdminNavBar />
            <DeliveryAdminSideBar />

            <div className="container">
                <br></br>
                <h1 className="text-center">Delivery Details</h1>
                <br></br>
                <br></br>
                <div className="row">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <table style={{ marginLeft: "750px" }}>
                                <thead>
                                    <tr>
                                        <td>
                                            <div >
                                                <label>From Date     :</label><br></br>
                                                <input
                                                    type="Date"
                                                    placeholder="Date"
                                                    name="fromDate"
                                                    onChange={handleChange}
                                                    value={data.fromDate}
                                                    required
                                                    className={styles.input}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ marginLeft: "10px" }}>
                                                <label>To Date      :</label><br></br>
                                                <input
                                                    type="Date"
                                                    placeholder="Date"
                                                    name="toDate"
                                                    onChange={handleChange}
                                                    value={data.toDate}
                                                    required
                                                    className={styles.input}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                            <table style={{ marginLeft: "890px" }}>
                                <tr>
                                    <td>
                                        <div style={{ marginLeft: "0px" }}>
                                            <button className={styles.g_button} type="submit">
                                                Search
                                            </button>
                                            <button className={styles.can_btn} style={{ marginLeft: "15px" }} onClick={clearData}>
                                                Clear
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </form>
                        <form>
                            <div  ref={componentRef}>

                            {/* <div>
                                <input className={styles.input}
                                    type="Date"
                                    placeholder="Date"
                                    name="fromDate"
                                    onChange={handleChange}
                                    value={data.fromDate}
                                    required
                                />
                            </div>
                            <div>
                                <input className={styles.input}
                                    type="Date"
                                    placeholder="Date"
                                    name="toDate"
                                    onChange={handleChange}
                                    value={data.toDate}
                                    required
                                />
                            </div>

                            <button type="submit" className={styles.g_button}>
                                Search
                            </button>
                            <button onClick={clearData} className={styles.can_btn}>
                                Clear
                            </button> */}
                            <table className="table table-striped table borderd">
                                <thead>
                                    <tr>
                                        <th>Delivery ID</th>
                                        <th>Customer Name</th>
                                        <th>Order ID</th>
                                        <th>Customer Contact</th>
                                        <th>Address</th>
                                        <th>Number of Orders</th>
                                        <th>Driver Name</th>
                                        <th>Driver Contact</th>
                                        <th>Delivery Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        deliveries.map(deliveries =>
                                            <tr key={deliveries.deliveryId}>
                                                <td> {deliveries.deliveryId}</td>
                                                <td> {deliveries.customerName}</td>
                                                <td> {deliveries.orderID}</td>
                                                <td> {deliveries.customerContactNumber}</td>
                                                <td> {deliveries.deliveryAddress}</td>
                                                <td> {deliveries.noofOrders}</td>
                                                <td> {deliveries.driverName}</td>
                                                <td> {deliveries.driverContactNumber}</td>
                                                <td> {deliveries.deliveryDate}</td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            </div>
                        </form>
                    </div>

                </div>
                <center>
                <button onClick={handlePrint} className="btn btn-outline-success"> Print Report </button>
                </center>

            </div>
        </div>
    )
}

