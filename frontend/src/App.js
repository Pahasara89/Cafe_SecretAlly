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
import Feedback from './components/Feedback';

import AddPaymentDetails from './components/AddPaymentDetails';
import ViewPaymentDetails from './components/ViewPaymentDetails';

import AddDeliveries from './components/AddDeliveries';
import ViewDeliveries from './components/ViewDeliveries';
import GenerateReport from './components/GenerateReport';
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
            <Route path="/feedback" element={<Feedback/>}/>
            

            <Route path="/add_Payment" element={<AddPaymentDetails/>} />
            <Route path="/view_Payment" element={<ViewPaymentDetails/>} />
            
            <Route path="/AddDeliveries" element={<AddDeliveries/>}/>
            <Route path="/ViewDeliveries" element={<ViewDeliveries/>}/>
            <Route path="/GenerateReport" element={<GenerateReport/>}/>

         </Routes>
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
