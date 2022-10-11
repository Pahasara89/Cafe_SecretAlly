import React, { useState } from "react"
import AddPaymentDetailsNavBar from './AddPaymentDetailsNavBar';
import '../App.css'
import './AddProductNavBar.css'
import './AddEditPayment.css'
import './HomeNavBar.css'
import AdminNavBar from "./AdminNavBar";
import Swal from "sweetalert2";
import Footer from "./Footer";
import HomeNavBar from "./HomeNavBar";


export default function AddProduct() {


    return (
    
      <>
        <div className="body">
            <HomeNavBar/>
 

            <div className="containers1">
                <form action="http://localhost:3000/Payment_Details/add_Payment" method="post" >
                    <h1>Add Payment Details</h1>
                    <br />
              <tr className='was-validated'>
                <td>
                

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Bank Owner Name</label>
                        <input type="text" name="BanK_Owner_Name" className="form-control input-field" id="inserProduct" placeholder="Enter Bank Owner name" required/>
                    </div>
                    </td>
                    <td>

                    <div className="col-md-3 element" style={{ display: 'block' }}>
                          <label for="datePicker" className="form-label1">Date</label>
                          <input id="date" name="Pay_date" label="Choose Received Date" type="Date" InputLabelProps={{ shrink: true, }} required/>
    
                    </div>

                     </td>

                    </tr>

                    
                    <br/>
                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label1">PAYMENT DETAILS</label>
                        <input name="BanKName" type="text" className="form-control" id="inputQuant" placeholder="Enter Bank Name" required/>
                    </div>
                    <tr >
                    <td>
                    
                    <div className="col-md-5 element">
                        
                        <input name="Card_No" type="Number" className="form-control" id="inputQuant1" placeholder="Enter Card Number"required/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <input name="Expiry" type="text" className="form-control" id="inputQuant2" placeholder="01/25"required/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        
                        <input name="Cvv" type="text" className="form-control" id="inputQuant3" placeholder="Cvv"required/>
                    </div>
                    </td>
                    </tr>

                    <br />
                    <tr>
                    <td>
                    <div className="col-md-5 element">
                        <label for="inputQuant4" className="form-label1">BILLING ADDRESS</label>
                        <input name="Strees_Address" type="text" className="form-control" id="inputQuant4" placeholder="Enter Strees Address"required/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <label for="inputQuant5" className="form-label1"></label>
                        <input name="City" type="text" className="form-control" id="inputQuant5" placeholder="Enter City"required/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <div className="col-md-5 element">
                        
                        <input name="State" type="text" className="form-control" id="inputQuant6" placeholder="Enter State"required/>
                    </div>
                    </td>
                    <td>
                    
                    <div className="col-md-5 element">
                    
                        <input name="Zip_Code" type="number" className="form-control" id="inputQuant7" placeholder="Enter Zip Code"required/>
                    </div>
                    </td>
                    </tr>
                    <div className="containers2">
                    <div className="col-md-5 element">
                        <label for="inputQuant8" className="form-label1">Order ID</label>
                        <input name="Order_ID" type="text" className="form-control" id="inputQuant8" placeholder="OD026" 
                        />
                    </div>

                    <br />
                    <div className="col-md-5 element">
                        <label for="inputQuant9" className="form-label1">You have to pay</label>
                        <input name="Totle_price" type="number" className="form-control" id="inputQuant9" placeholder="5000"
                        />

                        <p> Enjoy all the features and perk after you complete the payment</p>
                    </div>

                    <br />

                   </div>

                   <br />
                   <br />
                   <br />

                    <button type="submit" className="btn Addbtn">Add Payment Details</button>
                    <br />

                </form>
            </div>
            
            
        </div>
        <Footer/>
        </>


    )
}