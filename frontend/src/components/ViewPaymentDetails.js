import React, {useState,useEffect,Fragment,useRef} from 'react';
import AddPaymentDetailsNavBar from './AddPaymentDetailsNavBar';
import axios from 'axios';
import EditPayment from './EditPayment';
import ViewPaymentTable from './ViewPaymentTable';
import '../App.css';
import './AddProductNavBar.css'
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";
import './HomeNavBar.css'
import AdminNavBar from "./AdminNavBar";
import './ViweMorePayment.css'
import { Link } from 'react-router-dom';




export default function ViewPaymentDetails(){

 

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [Payment_Details,setPayment_Details] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() =>{

        function getPayment_Details() {
            axios.get("http://localhost:3000/Payment_Details/view_Payment").then((res) => {

                setPayment_Details(res.data);
                console.log(res.data)
            }).catch((err) => {

                alert(err.message);
            })
        }

        getPayment_Details();

    }, [])

    const [editFormData, setEditFormData] = useState({
        Pay_ID: "",

        

        BanK_Owner_Name: "",
        
        Order_ID: "",
        Totle_price: "",
        Pay_date: "",
 
        

    })


    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }


    function updateData(e){
        e.preventDefault();
        
        const updatePaymentDetails ={
            ID: editPayment,
            
            Order_ID: editFormData.Order_ID,

            BanK_Owner_Name: editFormData.BanK_Owner_Name,
            Totle_price: editFormData.Totle_price,
            Pay_date: editFormData.Pay_date,

            BanKName: editFormData.BanKName,
            Card_No: editFormData.Card_No,
            Expiry: editFormData.Expiry,
            Cvv: editFormData.Cvv,

            Strees_Address: editFormData.Strees_Address,
            City: editFormData.City,
            State: editFormData.State,
            Zip_Code: editFormData.Zip_Code,

            
            
        }

        axios.put("http://localhost:5000/Payment_Details/update_Payment_Details/:ID",updatePaymentDetails).then(() =>{
            alert("Payment updated")
            window.location.reload();
        }).catch((err) =>{
            alert("Payment Fail")
            alert(err)
        })


    }


    const [editPayment,setEditPayment] = useState(null);

    const handleEditClick = (e, Payment_Details)=> {
        e.preventDefault();
        setEditPayment(Payment_Details._id)

        const formValues = {
            Pay_ID: Payment_Details.Pay_ID,

            Order_ID: Payment_Details.Order_ID,

            BanK_Owner_Name: Payment_Details.BanK_Owner_Name,
            Totle_price: Payment_Details.Totle_price,
            Pay_date: Payment_Details.Pay_date,

            BanKName: Payment_Details.BanKName,
            Card_No: Payment_Details.Card_No,
            Expiry: Payment_Details.Expiry,
            Cvv: Payment_Details.Cvv,

            Strees_Address: Payment_Details.Strees_Address,
            City: Payment_Details.City,
            State: Payment_Details.State,
            Zip_Code: Payment_Details.Zip_Code,

            
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditPayment(null);
    }


    const handleDeleteClick = (id) => {
        
        axios.delete('http://localhost:3000/Payment_Details/delete/'+id).then(() =>{
            window.location.reload();
        }).catch((err) =>{
            alert(err)
        })

    }

     /*----------------------------------------------------------------------------------------------------------------*/
     const [PaymentData,setPaymentData] = useState([]); 

    const handleviweClick = (id) =>{
        // axios.get("http://localhost:3000/pet-service/get-service/") 
        window.location.href=`view_Payment_Details/${id}`
    }

    const getPaymentData = () => {
        axios.get('http://localhost:3000/Payment_Details/view_Payment')
            .then(res => {
                const allPaymentData = res.data.result;
                setPaymentData(allPaymentData)       
            })
    }


    useEffect(()=>{
        getPaymentData()
    },[]);
     /*-----------------------------------------------------------------------------------------------------------------*/

    return(
        <div >
            <AdminNavBar/>
            <AddPaymentDetailsNavBar/>
            
            
            <div className='search-container'>
                <input type="text" className="search" placeholder="Search Payment..." value={q} onChange={(e)=> setQ(e.target.value)}/>      
            </div>
            

            <div ref={componentRef}>
            <form onSubmit={updateData}>
                <table className='table '>
                    <thead>
                        <tr>
                            
                            <th>PAY ID</th>
                            <th>OwnerName</th>
                            <th>Order ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Payment_Details.filter((Payment_Details)=> {
                            if(q === ""){
                                return Payment_Details
                            }else if(Payment_Details.BanK_Owner_Name.toLowerCase().includes(q.toLowerCase())||
                                     Payment_Details.Pay_ID.toLowerCase().includes(q.toLowerCase()) ||
                                     Payment_Details.Order_ID.toLowerCase().includes(q.toLowerCase())||
                                     Payment_Details.Pay_date.toLowerCase().includes(q.toLowerCase())){
                                return Payment_Details
                            }
                        }).map((Payment_Details)=> (
                            <Fragment>

                                {editPayment === Payment_Details._id ? (
                                    <EditPayment 
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                 ) :
                                /* (
                                    <PaymentData 
                                        editFormData={editFormData} 
                                        handleviweClick={handleviweClick}
                                        handleCancelClick={handleCancelClick}
                                    />
                                 ) :*/
                                  (
                                    <ViewPaymentTable 
                                        Payment_Details={Payment_Details}
                                        handleEditClick={handleEditClick}
                                        handleViweClick={handleviweClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                 )}
                                 
                            </Fragment>
                            
                        ))}
                    </tbody>

                </table>
            </form>
            </div>
            <Link to="/printPaymentDetails"><button  className="print__button btn2"><FiPrinter/> Print Report </button></Link>

        </div>
    );
}