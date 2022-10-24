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
    const [productName , setproductName] = useState(localStorage.getItem("productName"));
    const [quantity , setquantity] = useState(localStorage.getItem("quantity"));
    const [discount , setdiscount] = useState(localStorage.getItem("discount"));
    const [product_id , setproduct_id] = useState(localStorage.getItem("productID"));
    const [price , setprice] = useState(localStorage.getItem("price"));
    
    //action="http://localhost:3000/Payment_Details/add_Payment" method="post"


    

    const addPayment = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:5000/Payment_Details/addPayment", { 
            productName:productName,
            quantity:quantity,

            discount:discount,
            product_id:product_id,
            price:price,
           
        }).then((res)=>{
            if(res.status==200){
                
                Swal.fire({
                    icon: 'success',
                    title: ' Added',
                    confirmButtonText: 'Ok',
                  }).then((result) => {
                    if (result.isConfirmed) {
                        //window.location.href = "/Success_payment"
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

       // console.log(bankOwnerName);
    }

    return (
    
      <>
        <div className="body2">
            <HomeNavBar/>
 

            <div className="containers1">
                <form onSubmit={addPayment} >
                    <h1>Shopping Cart</h1>
                    <br />
              <tr className='was-validated'>
                <td>
                

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">productName</label>
                        <input type="text" style={{color:"black",textAlign: "center"}} name="BanK_Owner_Name" className="form-control input-field" id="inserProduct" placeholder="Enter Bank Owner name" value={localStorage.getItem("productName")} disabled/>
                    </div>
                    </td>
                    <td>

                    

                     </td>

                    </tr>

                    
                    <br/>
                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label1">PAYMENT DETAILS</label>
                        <p className="ViweMore3">quantity</p>
                        <input name="BanKName" type="text" style={{color:"black",textAlign: "center"}} className="form-control" id="inputQuant" placeholder="Enter Quantity" onChange={(e)=>setquantity(e.target.value)} required/>
                    </div>
                    <tr >
                    <td>
                    
                    <div className="col-md-5 element">
                        <p className="ViweMore4">discount</p>
                        <input name="Card_No" type="Number" style={{color:"black",textAlign: "center"}} className="form-control" id="inputQuant1" placeholder="Enter Card Number" value={localStorage.getItem("discount")} disabled/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore4">productID</p>
                        <input name="Expiry" type="text" style={{color:"black",textAlign: "center"}} className="form-control" id="inputQuant2" placeholder="01/25" value={localStorage.getItem("productID")} disabled/>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore4">price</p>
                        <input name="Cvv" style={{color:"black",textAlign: "center"}} type="text" className="form-control" id="inputQuant3" placeholder="Cvv" value={localStorage.getItem("price")} disabled/>
                    </div>
                    </td>
                    </tr>

                    <br />
                    <tr>
                    <td>
                    
                    </td>
                    <td>
                    
                    </td>
                    </tr>
                    <tr>
                    <td>
                    
                    </td>
                    <td>
                    
                    
                    </td>
                    </tr>
                    <div className="containers2">
                    

                    <br />
                    

                    <br />

                   </div>

                   <br />
                   <br />
                   <br />

                   <button type="submit" className="btn Addbtn">Proceed To Pay</button>
                    <br />

                </form>
            </div>
            
            
        </div>
        <Footer/>
        </>


    )
}