import React, { useState, useEffect, Fragment, useRef } from 'react';
import axios from "axios";
import AdminNavBar from './AdminNavBar';
import DeliveryAdminSideBar from './NavBar/DeliveryAdminSideBar';
import EditDelivery from './EditDelivery';
import ViewDeliveryTable from './ViewDeliveryTable';
import { useReactToPrint } from "react-to-print"
import Swal from "sweetalert2";

export default function ViewDeliveries() {

    //const componentRef = useRef();
        //const handlePrint = useReactToPrint({
        //content: () => componentRef.current,
    //});
   
    const [deliveries, setDeliveries] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() => {
        const getDeliveries = async () => {
            const { data } = await axios.get("http://localhost:5000/delivery/")
            console.log(data)
            setDeliveries(data)
        }
        getDeliveries();
    }, [])

    const [editFormData, setEditFormData] = useState({
        deliveryId: "",
        customerName: "",
        orderID: "",
        customerContactNumber: "",
        deliveryAddress: "",
        noofOrders: "",
        driverName: "",
        driverContactNumber: "",
        deliveryDate: "",
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

        const updateDelivery ={
            ID: editDelivery,
            customerName: editFormData.customerName,
            orderID: editFormData.orderID,
            customerContactNumber: editFormData.customerContactNumber,
            deliveryAddress: editFormData.deliveryAddress,
            noofOrders: editFormData.noofOrders,
            driverName: editFormData.driverName,
            driverContactNumber: editFormData.driverContactNumber,
            deliveryDate: editFormData.deliveryDate
        }

        axios.put("http://localhost:5000/delivery/updateDelivery/:ID",updateDelivery).then(()=>{
            //alert("Delivery Updated")
            //window.location.reload();
            Swal.fire({
                title: "Success!",
                text: "Updated Successfully",
                icon: "success",
                showConfirmButton: false,
            })
        }).catch((err) =>{
            //alert(err)
            Swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",
            });
        });
        setTimeout(() => {
            window.location.replace("http://localhost:3000/ViewDeliveries");
            }, 2000)
    }

    const [editDelivery,setEditDelivery] = useState(null);

    const handleEditClick = (e, delivery)=> {
        e.preventDefault();
        setEditDelivery(delivery._id)

        const formValues = {
            deliveryId: delivery.deliveryId,
            customerName: delivery.customerName,
            orderID: delivery.orderID,
            customerContactNumber: delivery.customerContactNumber,
            deliveryAddress: delivery.deliveryAddress,
            noofOrders: delivery.noofOrders,
            driverName: delivery.driverName,
            driverContactNumber: delivery.driverContactNumber,
            deliveryDate: delivery.deliveryDate,
        }
        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditDelivery(null);
    }

    const handleDeleteClick = (id) => {
        Swal.fire({
            title:'Are you sure?',
            text:"You wan't be able to revert this!",
            icon:'Warning',
            showCancelButton:'#4BB543',
            cancelButtonColor:'#d33',
        })
        axios.delete('http://localhost:5000/delivery/deleteDelivery/'+id).then(()=>{
            //alert("Delivery Details Deleted")
            //window.location.reload();
            Swal.fire({
                title: "Success!",
                text: "Deleted Successfully",
                icon: "success",
                showConfirmButton: false,
            })
        }).catch((err) =>{
            //alert(err)
            Swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",
            });
        });
        setTimeout(() => {
            window.location.replace("http://localhost:3000/ViewDeliveries");
            }, 3000)
    }

    return (
        <div>
            <AdminNavBar/>
            <DeliveryAdminSideBar/>

        <div className="container">
            <br></br>
            <h1 className="text-center">Delivery Details</h1>
            <br></br>
            <div id="repGSearch" className='col-lg-3 mt-2 mb-2 ml-5'>
                <input type="search" className="form-control" placeholder="Search Deliveires..." value={q} onChange={(e)=> setQ(e.target.value)}/>      
            </div>
            <br></br>
            
                 <div className="row">
                 <div>
                 <form onSubmit={updateData}>
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
                             <th>Actions</th>
                         </tr>
                     </thead>
                     <tbody>
                         {deliveries.filter((delivery)=> {
                            if(q === ""){
                               return delivery
                            }else if(delivery.deliveryId.toLowerCase().includes(q.toLowerCase())) {
                            return delivery
                            }
                        }).map((delivery)=> (
                        <Fragment>
                             {editDelivery === delivery._id ? (
                               <EditDelivery
                                   editFormData={editFormData}
                                   handleEditFormChange={handleEditFormChange}
                                   handleCancelClick={handleCancelClick}
                              />
                        ) : (
                              <ViewDeliveryTable
                                 delivery={delivery}
                                 handleEditClick={handleEditClick}
                                 handleDeleteClick={handleDeleteClick}
                             />
                        )}
     
                        </Fragment>
                        ))}
                     </tbody>
                 </table>
                 </form>
                 </div>

             </div>
             
        </div>
        </div>
    )
}

