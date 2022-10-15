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
import axios from 'axios';
// ES6 Modules or TypeScript
//import Swal from 'sweetalert2';
//import Swal from 'sweetalert2/dist/sweetalert2.js'
//import 'sweetalert2/src/sweetalert2.scss'


export default function AddProduct() {
    const [bankOwnerName , setBankOwnerName] = useState('');
    const [Pay_date , setPay_date] = useState('');
    const [BanKName , setBanKName] = useState('');
    const [Card_No , setCard_No] = useState('');
    const [Expiry , setExpiry] = useState('');
    const [Cvv , setCvv] = useState('');
    const [Strees_Address , setStrees_Address] = useState('');
    const [City , setCity] = useState('');
    const [State , setState] = useState('');
    const [Zip_Code , setZip_Code] = useState('');
    const [Order_ID , setOrder_ID] = useState(localStorage.getItem("productID"));
    const [Totle_price , setTotle_price] = useState(localStorage.getItem("price"));
    
    //action="http://localhost:3000/Payment_Details/add_Payment" method="post"


    

    const addPayment = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:3000/Payment_Details/add_Payment", { 
            BanK_Owner_Name:bankOwnerName,
            Pay_date:Pay_date,

            BanKName:BanKName,
            Card_No:Card_No,
            Expiry:Expiry,
            Cvv:Cvv,

            Strees_Address:Strees_Address,
            City:City,
            State:State,
            Zip_Code:Zip_Code,

            Order_ID:Order_ID,
            Totle_price:Totle_price,
        }).then((res)=>{
            if(res.status==200){
                localStorage.setItem("bankOwner", bankOwnerName);
                localStorage.setItem("Pay_date", Pay_date);
                localStorage.setItem("BanKName", BanKName);
                localStorage.setItem("Card_No", Card_No);
                localStorage.setItem("Expiry", Expiry);
                localStorage.setItem("Cvv", Cvv);
                localStorage.setItem("Strees_Address", Strees_Address);
                localStorage.setItem("City", City);
                localStorage.setItem("State", State);
                localStorage.setItem("Zip_Code", Zip_Code);

                localStorage.setItem("Order_ID", Order_ID);
                localStorage.setItem("Totle_price", Totle_price);

            
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Success',
                    confirmButtonText: 'Viwe Receipt',
                  }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/Success_payment"
                    }
                  })
                

                //window.location.href = "/Success_payment"
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })

            }
        }).catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
            //console.log(error.response.data);
        })

        console.log(bankOwnerName);
    }

    return (
    
      <>
        <div className="body2">
            <HomeNavBar/>
 

            <div className="containers1">
                <form onSubmit={addPayment} >
                    <h1>Add Payment Details</h1>
                    <br />
              <tr className='was-validated'>
                <td>
                

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Bank Owner Name</label>
                        <input type="text" name="BanK_Owner_Name" className="form-control input-field" id="inserProduct" placeholder="Enter Bank Owner name" onChange={(e)=>setBankOwnerName(e.target.value)} required/>
                    </div>
                    </td>
                    <td>

                    <div className="col-md-3 element" style={{ display: 'block' }}>
                          <label for="datePicker" className="form-label1">Date</label>
                          <input id="date" name="Pay_date" label="Choose Received Date"  type="Date" InputLabelProps={{ shrink: true, }} onChange={(e)=>setPay_date(e.target.value)} required/>
    
                    </div>

                     </td>

                    </tr>

                    
                    <br/>
                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label1">PAYMENT DETAILS</label>
                        <p className="ViweMore3">Bank Name</p>
                        <input name="BanKName" type="text" className="form-control" id="inputQuant" placeholder="Enter Bank Name" onChange={(e)=>setBanKName(e.target.value)} required/>
                    </div>
                    <tr >
                    <td>
                    
                    <div className="col-md-5 element">
                        <p className="ViweMore4">Card No</p>
                        <input name="Card_No" type="Number" className="form-control" id="inputQuant1" placeholder="Enter Card Number" onChange={(e)=>setCard_No(e.target.value)} required/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore4">Expiry</p>
                        <input name="Expiry" type="text" className="form-control" id="inputQuant2" placeholder="01/25" onChange={(e)=>setExpiry(e.target.value)} required/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore4">Cvv</p>
                        <input name="Cvv" type="text" className="form-control" id="inputQuant3" placeholder="Cvv" onChange={(e)=>setCvv(e.target.value)} required/>
                    </div>
                    </td>
                    </tr>

                    <br />
                    <tr>
                    <td>
                    <div className="col-md-5 element">
                        <label for="inputQuant4" className="form-label1">BILLING ADDRESS</label>
                        <p className="ViweMore3">Strees Address</p>
                        <input name="Strees_Address" type="text" className="form-control" id="inputQuant4" placeholder="Enter Strees Address" onChange={(e)=>setStrees_Address(e.target.value)} required/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <label for="inputQuant5" className="form-label1"></label>
                        <p className="ViweMore3">City</p>
                        <input name="City" type="text" className="form-control" id="inputQuant5" placeholder="Enter City" onChange={(e)=>setCity(e.target.value)} required/>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore4">State</p>
                        <input name="State" type="text" className="form-control" id="inputQuant6" placeholder="Enter State" onChange={(e)=>setState(e.target.value)} required/>
                    </div>
                    </td>
                    <td>
                    
                    <div className="col-md-5 element">
                        <p className="ViweMore4">Zip Code</p>
                        <input name="Zip_Code" type="number" className="form-control" id="inputQuant7" placeholder="Enter Zip Code" onChange={(e)=>setZip_Code(e.target.value)} required/>
                    </div>
                    </td>
                    </tr>
                    <div className="containers2">
                    <div className="col-md-5 element">
                        <label for="inputQuant8" className="form-label1">Order ID</label>
                        <input name="Order_ID"  type="text" value={localStorage.getItem("productID")} className="form-control" id="inputQuant8" placeholder="OD026" disabled style={{color:"black",textAlign: "center"}}
                        />
                    </div>

                    <br />
                    <div className="col-md-5 element">
                        <label for="inputQuant9" className="form-label1">You have to pay</label>
                        <input name="Totle_price" value={localStorage.getItem("price")} disabled style={{color:"black",textAlign: "center"}} type="number" className="form-control" id="inputQuant9" 
                        />

                        <p className="p_tag"> Enjoy all the features and perk after you complete the payment</p>
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