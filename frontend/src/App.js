import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './components/Home';
import AdminHome from './components/AdminHome';

import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Burgers from './components/Burgers';
import Pizza from './components/Pizza';
import Shawarma from './components/Shawarma';
import HotDogs from './components/HotDogs';
import Cart from './components/Cart';
import PrintReport from './components/PrintReport';

import AddPaymentDetails from './components/AddPaymentDetails';
import ViewPaymentDetails from './components/ViewPaymentDetails';

<<<<<<< HEAD
import AddDeliveries from './components/AddDeliveries';
import ViewDeliveries from './components/ViewDeliveries';
import GenerateReport from './components/GenerateReport';
import AddOrders from './components/AddOrders';
import ViewOrders from './components/ViewOrders';
=======

import ContactUs from './components/ContactUs';
import AllComplaints from './components/AllComplaints';
import AddComplaint from './components/AddComplaint';





>>>>>>> c89f8c4852f216f71d8ed7d7e459ff4bd5fcab6f
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
            <Route path="/shawarma" element={<Shawarma/>} />
            <Route path="/hotdogs" element={<HotDogs/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="printreport" element={<PrintReport/>}/>

          
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path='/add-feedback' element={<AddComplaint/>}/>
            <Route path='/view-feedback' element={<AllComplaints/>}/>
            

            <Route path="/add_Payment" element={<AddPaymentDetails/>} />
            <Route path="/view_Payment" element={<ViewPaymentDetails/>} />
            
<<<<<<< HEAD
            <Route path="/AddDeliveries" element={<AddDeliveries/>}/>
            <Route path="/ViewDeliveries" element={<ViewDeliveries/>}/>
            <Route path="/GenerateReport" element={<GenerateReport/>}/>
            <Route path="/AddOrders" element={<AddOrders/>}/>
            <Route path="/ViewOrders" element={<ViewOrders/>}/>
=======
          
>>>>>>> c89f8c4852f216f71d8ed7d7e459ff4bd5fcab6f

         </Routes>
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
