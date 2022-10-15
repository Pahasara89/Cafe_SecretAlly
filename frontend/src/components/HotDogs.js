import React, {useState,useEffect} from 'react';
import axios from 'axios';
import ViewHotDogs from './ViewHotDogs';
import HomeNavBar from './HomeNavBar';
import {Row,Container} from 'react-bootstrap';



export default function HotDogs() {

    const [products,setProducts] = useState([]);

    useEffect(() =>{

        function getProducts() {
            axios.get("http://localhost:5000/product/view").then((res) => {

                setProducts(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getProducts();

    }, [])

    return (
        <>
            <HomeNavBar/>
                
           <Container className='justify-content-center p-2'>
           <Row>
              {products.map((product)=> {
                  return(
                    <ViewHotDogs product={product} />
                  )
              })}
           </Row>
           </Container>
           
            
                
            
        </>
    )
}