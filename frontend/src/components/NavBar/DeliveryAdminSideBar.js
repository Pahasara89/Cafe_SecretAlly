import React from "react";
import { NavLink } from "react-router-dom";
import './DeliveryAdminSideBar.css'


function DeliveryAdminSideBar() {
  return (
    <div className="topnav">
         <NavLink to="/" activeClassName="">
        Home
      </NavLink>
      <NavLink to="/Orders" activeClassName="">
        Orders
      </NavLink>

      <NavLink to="/ViewDeliveries" activeClassName="">
        Delivery Details
      </NavLink>

      <NavLink to="/AddDeliveries" activeClassName="">
        Add Delivery
      </NavLink>

      
      <NavLink to="/GenerateReport" activeClassName="">
        Monthly Report
      </NavLink>
    </div>
  );
}

export default DeliveryAdminSideBar;