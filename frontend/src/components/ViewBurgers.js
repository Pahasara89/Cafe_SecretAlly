import React from 'react';
import {Card} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import '../App.css';
import {Col} from 'react-bootstrap';
import { Axios } from 'axios';

const ViewBurgers = ({product,userInfo}) => {
    const cat = product.category;

    function addToCart(pro_id,pro_name,price) {
        const userId = localStorage.getItem("userId");
        const newCart ={
          productName:pro_name,
          product_id:pro_id,
          price:price,
          discount:"20",
          quantity:"1",
          userId:userId
        }
    
        Axios.post("http://localhost:5000/cart/insertCart",newCart).then(
          res => {
            console.log(res.data);
            console.log("Item Add to cart Successfully");
          }
        )
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
                                // onClick={() =>{} }
                              
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