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

import AddDeliveries from './components/AddDeliveries';
import ViewDeliveries from './components/ViewDeliveries';
import GenerateReport from './components/GenerateReport';
import AddOrders from './components/AddOrders';
import ViewOrders from './components/ViewOrders';

import ContactUs from './components/ContactUs';
import AllComplaints from './components/AllComplaints';

import AddComplaint from './components/AddComplaint';

import AddSuccess from './components/Payment_Success';
import ViewOnePaymentDetails from './components/ViweOnePaymentData';
import PrintPaymentDetail from './components/printPaymentDetails';

import LoadingPage from './components/LoadingPage';
import UserRegistration from './components/User/UserRegistration';
import UserLogin from './components/User/UserLogin';
import AdminLogin from './components/Admin/AdminLogin';
import AdminRegistration from './components/Admin/AdminRegistration';







import ViewAdmin from './components/ViewAdmin';




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
            <Route path="/add" element={<AddProduct/>} />
            <Route path = "/view-admin" element={<ViewAdmin/>}/>
            <Route path="/printreport" element={<PrintReport/>}/>

          
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path='/add-feedback' element={<AddComplaint/>}/>
            <Route path='/view-feedback' element={<AllComplaints/>}/>
            

            <Route path="/add_Payment" element={<AddPaymentDetails/>} />
            <Route path="/view_Payment" element={<ViewPaymentDetails/>} />

            <Route path="/view_Payment_Details/:id" element={<ViewOnePaymentDetails/>} />
            <Route path="/Success_payment" element={<AddSuccess/>} />
            <Route path="/printPaymentDetails" element={<PrintPaymentDetail/>} />
            
            

            <Route path="/AddDeliveries" element={<AddDeliveries/>}/>
            <Route path="/ViewDeliveries" element={<ViewDeliveries/>}/>
            <Route path="/GenerateReport" element={<GenerateReport/>}/>
            <Route path="/AddOrders" element={<AddOrders/>}/>
            <Route path="/ViewOrders" element={<ViewOrders/>}/>


            <Route path="/LoadingPage" element={<LoadingPage/>}/>
            <Route path="/UserRegistration" element={<UserRegistration/>}/>
            <Route path="/UserLogin" element={<UserLogin/>}/>

            <Route path="/AdminRegistration" element={<AdminRegistration/>}/>
            <Route path="/AdminLogin" element={<AdminLogin/>}/>
            





         </Routes>
      
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
