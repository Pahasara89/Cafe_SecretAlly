import React, {useState,useEffect,Fragment,useRef} from 'react';
import ViewProductNavBar from './ViewProductNavBar';
import axios from 'axios';
import EditProduct from './EditProduct';
import ViewProductTable from './ViewProductTable';
import '../App.css';
import './AddProductNavBar.css'
import {FiPrinter} from 'react-icons/fi';
import { useReactToPrint } from "react-to-print";
import './HomeNavBar.css'
import AdminNavBar from "./AdminNavBar";
import swal from "sweetalert2";




export default function ViewProducts(){

 

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [products,setProducts] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() =>{

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

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }


    function updateData(e){
        e.preventDefault();
        
        const updateProduct ={
            ID: editProduct,
            productName: editFormData.productName,
            category: editFormData.category,
            price: editFormData.price,
            quantity: editFormData.quantity
            
        }

        axios.put("http://localhost:5000/product/update/:ID",updateProduct).then(() =>{
            swal.fire({
                title: "Success!",
                text: "Updated Successfully",
                icon: "success",
                showConfirmButton: false,
            });
        }).catch((err) =>{
            swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",
            });
        })

        setTimeout(()=>{
            window.location.reload();
        },1500)


    }


    const [editProduct,setEditProduct] = useState(null);

    const handleEditClick = (e, product)=> {
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
        
        axios.delete('http://localhost:5000/product/delete/'+id).then(() =>{
            swal.fire({
                title: "Success!",
                text: "Deleted Successfully",
                icon: "success",
                showConfirmButton: false,
            })
        }).catch((err) =>{
            //alert(err)
            swal.fire({
                title: "Error!",
                text: "Couldn't delete your Details",
                icon: "error",
            });
        });
        setTimeout(() => {
            window.location.replace("http://localhost:3000/view");
            }, 3000)

    }


    return(
        <div>
            <AdminNavBar/>
            <ViewProductNavBar/>
            
            
            <div id="repGSearch" className='col-lg-3 mt-2 mb-2 ml-5'>

                <input type="search" className="form-control" placeholder="Search Products..." value={q} onChange={(e)=> setQ(e.target.value)}/>      

            </div>
            

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
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.filter((product)=> {
                            if(q === ""){
                                return product
                            }else if(product.productName.toLowerCase().includes(q.toLowerCase())) {
                                return product
                            }
                        }).map((product)=> (
                            <Fragment>

                                {editProduct === product._id ? (
                                    <EditProduct 
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                 ) : (
                                    <ViewProductTable 
                                        product={product}
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
    );
}