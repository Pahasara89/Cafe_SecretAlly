import React, { useState } from "react"
import AddProductNavBar from './AddProductNavBar';
import '../App.css'
import './AddProductNavBar.css'
import './AddEdit.css'
import './HomeNavBar.css'
import AdminNavBar from "./AdminNavBar";



export default function AddProduct() {

    const clearData = () => {
        window.location.reload(false);
    };



    return (
    

        <div className="body">
            <AdminNavBar/>
            <AddProductNavBar />
            
            <br></br>
            <br></br>

            <div className="containerss">
                <form action="http://localhost:5000/product/add" method="post" class="form img " encType="multipart/form-data">

                    <h5>Add Product</h5>
                    <br />

                    <br />

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Product Name</label>
                        <input type="text" name="productName" className="form-control input-field" id="inserProduct" placeholder="Enter product name" required
                        />
                    </div>

                    <br />

                    <div className="col-md-7 element">
                        <label className="form-label1" for="categorySelect">Category</label>
                        <select name="category" className="form-select" id="categorySelect"
                        >
                            <option>Choose...</option>
                            <option>Pizza</option>
                            <option>Burgers</option>
                            <option>Shawarma</option>
                            <option>Hot dogs</option>
                        </select>
                    </div>

                    <br />

                    <div className="col-md-3 element" style={{ display: 'block' }}>
                        <label for="datePicker" className="form-label1">Received Date</label>
                        <input id="date" name="date" label="Choose Received Date" type="Date" InputLabelProps={{ shrink: true, }} required
                        />
                    </div>
                    <br />
                    <table className="element">
                        <tr>
                            <td>
                                <div className="col-md-10">
                                    <label for="inputQuant" className="form-label1">Quantity</label>
                                    <input name="quantity" type="number" className="form-control" id="inputQuant" placeholder="Enter the quantity"
                                    />
                                </div>
                            </td>

                            <td>
                                <div className="col-md-14">
                                    <label for="" className="form-label1">Unit</label>
                                    <select id="inputState" className="form-select" name="unit">
                                        <option selected>Choose...</option>
                                        <option value="pcs">pieces</option>
                                        <option value="kg">kg</option>
                                        <option value="ℓ">liter</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <br />

                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label1">Price(LKR.)</label>
                        <input name="price" type="number" className="form-control" id="inputQuant" placeholder="Enter unit price"
                        />
                    </div>

                    <br />

                    <div className="col-md-7 element">
                        <label className="form-label1" for="categorySelect">Size</label>
                        <select name="size" className="form-select" id="sizeSelect"
                        >
                            <option>Choose...</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>

                    <br />

                    <br /><br />

                    <div className="element">
                        <label for="actual-btn" className="form-label1">Upload Product Image</label>
                        <input type="file" id="actual-btn" name="image" className="upload textcolor" required
                        />
                    </div>

                    <br />

                    <button type="submit" className="btn Addbtn">Add Product</button>
                    <buttons type="clear" className="btn Addbtn1" onClick={clearData}>Clear</buttons>

                    <br />

                </form>
            </div>
        </div>



    )
}