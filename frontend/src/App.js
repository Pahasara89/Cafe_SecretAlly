import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Home from './components/Home';
import Burgers from './components/Burgers';
import Pizza from './components/Pizza';
import Shawarma from './components/Shawarma';
import HotDogs from './components/HotDogs';
import Cart from './components/Cart';
import AdminHome from './components/AdminHome';

import ContactUs from './components/ContactUs';





 const App = () =>{


 return (
   <Router>
     <div>
       
       <main>
         <Routes>
          
           
           <Route path="/customer-home" element={<Home/>} />
           <Route path="/admin-home" element={<AdminHome/>} />

            <Route path="/view" element={<ViewProduct/>} />
            <Route path="/burgers" element={<Burgers/>} />
            <Route path="/pizza" element={<Pizza/>} />
            <Route path="/shawarna" element={<Shawarma/>} />
            <Route path="/hotdogs" element={<HotDogs/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add" element={<AddProduct/>} />

          
            <Route path="/contact" element={<ContactUs/>}/>
            

            
            

         </Routes>
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
