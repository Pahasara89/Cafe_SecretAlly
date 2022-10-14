import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Home from './components/Home';
import Burgers from './components/Burgers';
import Pizza from './components/Pizza';
import Shawarma from './components/Shawarma';
import HotDogs from './components/HotDogs';
import AdminHome from './components/AdminHome';
import Register from './components/Auth/Register';
import Login from "./components/Auth/Login";
import UserProfile from "./components/Auth/UserProfile";
import Cart from "./components/Cart/Cart";
import UserContext from './components/Auth/context/userContext';
import AllUser from './components/AllUsers';

import ContactUs from './components/ContactUs';

const App = () =>{

  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:3000/user/tokenIsValid', null, {headers: {"x-auth-token": token}});
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:3000/user/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }

    checkLoggedIn();
  }, []);

 return (
   <Router>
     <div>
       
       <main>
         
          <UserContext.Provider value={{ userData, setUserData }}>
          <Routes>

            <Route path="/customer-home" element={<Home/>} />
            <Route path="/admin-home" element={<AdminHome/>} />

            <Route path="/view" element={<ViewProduct/>} />
            <Route path="/burgers" element={<Burgers/>} />
            <Route path="/pizza" element={<Pizza/>} />
            <Route path="/shawarna" element={<Shawarma/>} />
            <Route path="/hotdogs" element={<HotDogs/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            
            <Route path="/profile" element ={<UserProfile />} />
            <Route path="/cart" element ={<Cart/>} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/allu" element={<AllUser/>}/>
            </Routes>
          </UserContext.Provider>


          
            
            

            
            

         
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
