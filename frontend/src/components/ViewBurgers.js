
import {Card} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import '../App.css';
import {Col} from 'react-bootstrap';
import { Axios } from 'axios';
import React, { useState } from "react"
import Swal from 'sweetalert2';

const ViewBurgers = ({product,userInfo}) => {
    const cat = product.category;


     const addToCart= (price,productName,productID,quantity)=>{
     
        localStorage.setItem("price", price);
        localStorage.setItem("productName", productName);
        localStorage.setItem("productID", productID);
        localStorage.setItem("quantity", quantity);
        localStorage.setItem("discount", "20");

        window.location.href = "/AddPaymentDetails"

    

    
    const [productNamee , setproductName] = (localStorage.getItem("productName"));
    const [pro_id , setpro_id] = (localStorage.getItem("productID"));
    const [pricee , setprice] = (localStorage.getItem("price"));
    const [quantityy , setquantity] = (localStorage.getItem("quantity"));
    const [userId , setuserId] = (localStorage.getItem("userId"));
    const [discount , setdiscount] = ("20");
    

    
        Axios.post("http://localhost:5000/cart/insertCart",{
            productName:productNamee,
            product_id:pro_id,
            price:pricee,
            discount:discount,
            quantity:quantityy,
            userId:userId, 
        
            
          }).then((res)=>{
            if(res.status==200){
                //localStorage.setItem("bankOwner", bankOwnerName);
                // localStorage.setItem("Pay_date", Pay_date);
                // localStorage.setItem("BanKName", BanKName);
                // localStorage.setItem("Card_No", Card_No);
                // localStorage.setItem("Expiry", Expiry);
                // localStorage.setItem("Cvv", Cvv);
                // localStorage.setItem("Strees_Address", Strees_Address);
                // localStorage.setItem("City", City);
                // localStorage.setItem("State", State);
                // localStorage.setItem("Zip_Code", Zip_Code);

                // localStorage.setItem("Order_ID", Order_ID);
                // localStorage.setItem("Totle_price", Totle_price);

            
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Success',
                    confirmButtonText: 'Viwe Receipt',
                  }).then((result) => {
                    if (result.isConfirmed) {
                       // window.location.href = "/Success_payment"
                    }
                  })
                

                //window.location.href = "/AddPaymentDetails"
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
        
}



    return(
        <>
            {cat === "Burgers" &&
                <Col md={6} lg={4} sm={12}>
                    <Card className="shadow-lg m-4 rounded card">

                        <Card.Img className='image center' src={"http://localhost:5000/uploads/" + product.image}></Card.Img>

                        <Card.Body>
                            <Card.Title>{product.productName}</Card.Title>
                            <Card.Title>Price: Rs.{product.price}.00</Card.Title>
                            <Card.Title>{product.quantity} in stock</Card.Title>
                            <div className='btnCenter'>
                            <button 
                                type='button' 
                                className='btn btn-warning btn-sm'
                                disabled={product.quantity <= 0}
                               // onClick={()=>addtocart(product.price,product.productName,product.pro_id)}
                               onClick={() => addToCart(product._id,product.productName,product.price,product.quantity)}
                                >
                                    Add to Cart
                            </button>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
            }
                
        </>                        
    )
}

export default ViewBurgers;