
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import {Link} from "react-router-dom";
import '../App.css'
import './AddProductNavBar.css'
import './AddEditPayment.css'
import './HomeNavBar.css'
import './ViweMorePayment.css'
import AdminNavBar from "./AdminNavBar";
//import { ThemeContext } from '@emotion/react';
//import { Button, CardContent, CardMedia, ownerDocument, TableContainer, useEventCallback } from '@mui/material';

//import Cards from '@mui/material/Card';
//import Img from './MoreService/moredetailscover.jpg'


const ViweOnePaymentData = () => {

    const { id } = useParams();

    const [PaymentData, setPaymentData] = useState({
        Pay_ID: "",

        Order_ID: "",

        BanK_Owner_Name: "",
        Totle_price: "",
        Pay_date: "",

        BanKName: "",
        Card_No: "",
        Expiry: "",
        Cvv: "",

        Strees_Address: "",
        City: "",
        State: "",
        Zip_Code: "",
    });

    //ohtnata one key tik okkoma danna\
    //contactNo ohoma dagena yanna

    const handleviweClick = (id) => {
        // axios.get("http://localhost:3000/pet-service/get-service/") 
        window.location.href = `${id}`
    }


    const getPaymentData = async (id) => {
        await axios.get("http://localhost:3000/Payment_Details/view_Payment/" + id)
            .then(res => {
                const allPaymentData = res.data.result;
                // setServiceData(allServiceData)
                // console.log(allServiceData)
                setPaymentData(
                    {Pay_ID:allPaymentData.Pay_ID,
                     BanK_Owner_Name:allPaymentData.BanK_Owner_Name,
                     Order_ID:allPaymentData.Order_ID,
                     Totle_price:allPaymentData.Totle_price,
                     Pay_date:allPaymentData.Pay_date,

                     BanKName: allPaymentData.BanKName,
                     Card_No: allPaymentData.Card_No,
                     Expiry: allPaymentData.Expiry,
                     Cvv: allPaymentData.Cvv,

                     Strees_Address: allPaymentData.Strees_Address,
                     City: allPaymentData.City,
                     State: allPaymentData.State,
                     Zip_Code: allPaymentData.Zip_Code,
                    })
            })

            .catch(err => {
                console.log(err)
            })
    }

    //dn state variable hadala result object eke ubata one tika e variables watala set krpan
    //eeta passe e variable tika use krnd puluwan



    useEffect(() => {
        getPaymentData(id);
    },[])

    return (
        


<div className="body1">
            <AdminNavBar/>
 

            <div className="containers3">
                <form >
                    <h1>View Payment Details</h1>
                    <br />
              <tr className='was-validated'>
                <td>
                

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label1">Bank Owner Name</label>
                        <p  className="ViweMore" >{PaymentData.BanK_Owner_Name}</p>
                    </div>
                    </td>
                    <td>

                    <div className="col-md-3 element" style={{ display: 'block' }}>
                          <label for="datePicker" className="form-label1">Date</label>
                          <p  className="ViweMore" >{PaymentData.Pay_date.substring(0,10)}</p>
    
                    </div>

                     </td>

                    </tr>

                    
                    <br/>
                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label1">PAYMENT DETAILS</label><br/>
                        
                        <p className="ViweMore1">Bank Name</p>
                        <p  className="ViweMore" >{PaymentData.BanKName}</p>
                    </div>
                    <tr >
                    <td>
                    
                    <div className="col-md-5 element">
                        <p className="ViweMore2">Card No</p>
                        <p  className="ViweMore" >{PaymentData.Card_No}</p>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore2">Expiry</p>
                        <p  className="ViweMore" >{PaymentData.Expiry}</p>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore2">Cvv</p>
                        <p  className="ViweMore" >{PaymentData.Cvv}</p>
                    </div>
                    </td>
                    </tr>

                    <br />
                    <tr>
                    <td>
                    <div className="col-md-5 element">
                        <label for="inputQuant4" className="form-label1">BILLING ADDRESS</label>
                        <p className="ViweMore1">Strees Address</p>
                        <p  className="ViweMore" >{PaymentData.Strees_Address}</p>
                    </div>
                    </td>
                    <td>
                    <div className="col-md-5 element">
                        <label for="inputQuant5" className="form-label1"></label>
                        <p className="ViweMore1">City</p>
                        <p  className="ViweMore" >{PaymentData.City}</p>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <div className="col-md-5 element">
                        <p className="ViweMore2">State</p>
                        <p  className="ViweMore" >{PaymentData.State}</p>
                    </div>
                    </td>
                    <td>
                    
                    <div className="col-md-5 element">
                        <p className="ViweMore2">Zip Code</p>
                        <p  className="ViweMore" >{PaymentData.Zip_Code}</p>
                    </div>
                    </td>
                    </tr>
                    <div className="containers4">
                    <div className="col-md-5 element">
                        <label for="inputQuant8" className="form-label1">Order ID</label>
                        <p  className="ViweMore" >{PaymentData.Order_ID}</p>
                    </div>

                    <br />
                    <div className="col-md-5 element">
                        <label for="inputQuant9" className="form-label1">Totle price ( Rs. )</label>
                        <p  className="ViweMore" >{PaymentData.Totle_price}</p>

                    </div>

                    <br />

                   </div>

                   <br />
                   <br />
                   <br />

                   <Link to="/view_Payment"><button type="submit" className="btn Addbtn" >Back </button></Link>
            
                    <br />

                </form>
            </div>

            
        </div>












    )
}


export default ViweOnePaymentData