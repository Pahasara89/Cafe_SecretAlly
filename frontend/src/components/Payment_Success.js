import React, {useState,useEffect,Fragment,useRef} from 'react';
import CardItem from './CardItem'
import {Link} from "react-router-dom";
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";
import AddPaymentDetailsNavBar from './AddPaymentDetailsNavBar';
import AdminNavBar from "./AdminNavBar";
import './Payment_Success.css'
import HomeNavBar from "./HomeNavBar";
import './HomeNavBar.css'
import Footer from "./Footer";
import axios from 'axios';




function Payment_Success() {
    const [Payment_Details,setPayment_Details] = useState([]);
    const [q, setQ] = useState(localStorage.getItem("Order_ID"));

    const [bankOwnerName , setBankOwnerName] = useState('');
    const [Pay_date , setPay_date] = useState('');
    const [BanKName , setBanKName] = useState('');
    const [Card_No , setCard_No] = useState('');
    const [Cvv , setCvv] = useState('');
    const [Strees_Address , setStrees_Address] = useState('');
    const [City , setCity] = useState('');
    const [State , setState] = useState('');
    const [Zip_Code , setZip_Code] = useState('');
    const [Order_ID , setOrder_ID] = useState('');
    const [Totle_price , setTotle_price] = useState('');
    const [Expiry , setExpiry] = useState('');

    useEffect(() => {
      function getPayment_Details() {
        axios.get("http://localhost:3000/Payment_Details/view_Payment").then((res) => {

            setPayment_Details(res.data);
            console.log(res.data)
        }).catch((err) => {

            alert(err.message);
        })
    }

    getPayment_Details();

    // if(Payment_Details.Order_ID===q){
      
    //   localStorage.setItem("Pay_ID", Payment_Details.Pay_ID);

    // }

    




        setBankOwnerName(localStorage.getItem("bankOwner"));
        setPay_date(localStorage.getItem("Pay_date"));
        setBanKName(localStorage.getItem("BanKName"));
        setCard_No(localStorage.getItem("Card_No"));
        setExpiry(localStorage.getItem("Expiry"));
        setCvv(localStorage.getItem("Cvv"));
        setStrees_Address(localStorage.getItem("Strees_Address"));
        setCity(localStorage.getItem("City"));
        setState(localStorage.getItem("State"));
        setZip_Code(localStorage.getItem("Zip_Code"));
        setOrder_ID(localStorage.getItem("Order_ID"));
        setTotle_price(localStorage.getItem("Totle_price"));



        localStorage.removeItem("price");
    }, [])
    
    // const componentRef = useRef();
    // const handlePrint = useReactToPrint({
      
    //     content: () => componentRef.current,
    // });
        

      const componentRef = useRef(null);
      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

      const handleback = (e)=>{

        window.location.href = "/customer-home"
      }
      

  return (
    // <div>
    // <h1>{bankOwnerName}</h1>
    // <h1>{Pay_date}</h1>
    // <h1>{BanKName}</h1>
    // <h1>{Card_No}</h1>
    // <h1>{Expiry}</h1>
    // <Link to="/customer-home"><button>home</button></Link>
    // </div>
    <>
    <div >
                       {Payment_Details.filter((Payment_Details)=> {
                            if(q === ""){
                                return Payment_Details
                            }else if(Payment_Details.Order_ID.toLowerCase().includes(q.toLowerCase())){
                              localStorage.setItem("Pay_ID", Payment_Details.Pay_ID);
                            }
                        })} 
      
      <HomeNavBar/>
            
            <body className='body4'>
             
            
            <div ref={componentRef}>
              
                  <div className="containers5">
                  
                      <h1>Purchase Details</h1>
                      <p className='Receipt3'>Payment ID :</p>
                      <p className='Receipt2'>{localStorage.getItem("Pay_ID")}</p>

                      <p className='Receipt3'>Order ID :</p>
                      <p className='Receipt2'>{Order_ID}</p>

                      <p className='Receipt3'>Name :</p>
                      <p className='Receipt2'>{bankOwnerName}</p>

                      <p className='Receipt3'>Order No :</p>
                      <p className='Receipt2'>{Order_ID}</p>

                      <p className='Receipt3'>Totle Amount :</p>
                      <p className='Receipt2'>{Totle_price}</p>

                      <p className='Receipt3'>Date :</p>
                      <p className='Receipt2'>{Pay_date}</p>

                      <div className='image1'>

                      </div>
                      
                  </div>
                  
                 
            
            </div>
            <div className='containers6'>
                  <button onClick={handlePrint} className="print__button btn2"><FiPrinter/> Print Report </button>
                 <button onClick={handleback} className="print__button btn2"> Back to Home </button>
                  </div>
            
            </body>
            
            
    </div>
    <Footer/>
    </>
  )
}

export default Payment_Success