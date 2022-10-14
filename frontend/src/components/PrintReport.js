import React, { useState, useEffect, Fragment, useRef } from 'react';
import ViewProductNavBar from './ViewProductNavBar';
import axios from 'axios';
import '../App.css';
import './AddProductNavBar.css'
import { FiPrinter } from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";
import './HomeNavBar.css'
import AdminNavBar from "./AdminNavBar";
import swal from "sweetalert2";
import styles from "./style.module.css";

export default function PrintReport() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [data, setData] = useState({
        fromDate: "",
        toDate: ""
    });


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };


    const [products, setProducts] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() => {

        function getProducts() {
            axios.get("http://localhost:5000/product/view").then((res) => {

                setProducts(res.data);
                console.log(res.data)
            }).catch((err) => {

                alert(err.message);
            })
        }

        getProducts();

    }, [])

    const [editFormData, setEditFormData] = useState({
        productID: "",
        productName: "",
        category: "",
        date: "",
        size: "",
        price: "",
        quantity: "",
    })


    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }


    function updateData(e) {
        e.preventDefault();

        const updateProduct = {
            ID: editProduct,
            productName: editFormData.productName,
            category: editFormData.category,
            price: editFormData.price,
            quantity: editFormData.quantity

        }

        axios.put("http://localhost:5000/product/update/:ID", updateProduct).then(() => {
            swal.fire({
                title: "Success!",
                text: "Updated Successfully",
                icon: "success",
                showConfirmButton: false,
            });
        }).catch((err) => {
            swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",
            });
        })

        setTimeout(() => {
            window.location.reload();
        }, 1500)


    }


    const [editProduct, setEditProduct] = useState(null);

    const handleEditClick = (e, product) => {
        e.preventDefault();
        setEditProduct(product._id)

        const formValues = {
            productID: product.productID,
            productName: product.productName,
            category: product.category,
            date: product.date,
            price: product.price,
            quantity: product.quantity,
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditProduct(null);
    }


    const handleDeleteClick = (id) => {

        axios.delete('http://localhost:5000/product/delete/' + id).then(() => {
            window.location.reload();
        }).catch((err) => {
            alert(err)
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/product/search-product", {
                fromDate: data.fromDate,
                toDate: data.toDate,
            })
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            });
    };

    const clearData = () => {
        window.location.reload(false);
    };


    return (
        <div>
            <AdminNavBar />
            <ViewProductNavBar />

            <br></br>
            <br></br>

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


                <div ref={componentRef}>
                    <form onSubmit={updateData}>
                        <table className='table '>
                            <thead>
                                <tr>
                                    <th>ProductID</th>
                                    <th>ProductName</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Size</th>
                                    <th>Price(Rs.)</th>
                                    <th>Quantity</th>
                                    <th>Stock</th>

                                </tr>
                            </thead>

                            <tbody>
                                {products.filter((product) => {
                                    if (q === "") {
                                        return product
                                    } else if (product.productName.toLowerCase().includes(q.toLowerCase())) {
                                        return product
                                    }
                                }).map((product) => (
                                    <Fragment>
                                        <tr>
                                            <td className='td'>{product.productID}</td>
                                            <td className='td'>{product.productName}</td>
                                            <td className='td'>{product.category}</td>
                                            <td className='td'>{product.date.substring(0, 10)}</td>
                                            <td className='td'>{product.size}</td>
                                            <td className='td'>{product.price}</td>
                                            <td>
                                                {(() => {

                                                    if (product.quantity <= 25) {

                                                        return (

                                                            <div style={{ backgroundColor: 'red', color: 'white', textAlign: 'center' }}>Low</div>

                                                        )

                                                    } else {

                                                        return (

                                                            <div style={{ backgroundColor: 'Green', color: 'white', textAlign: 'center' }}>Available</div>

                                                        )

                                                    }

                                                })()}
                                            </td>
                                            <td className='td'>{product.quantity}</td>
                                        </tr>
                                    </Fragment>

                                ))}
                            </tbody>

                        </table>
                    </form>
                </div>
                <button onClick={handlePrint} className="print__button btn2"><FiPrinter /> Print Report </button>

            </div>
        </div>
    );
}
