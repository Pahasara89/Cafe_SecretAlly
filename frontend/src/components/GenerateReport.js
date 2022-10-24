import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import jsPdf from 'jspdf';
import 'jspdf-autotable';
import AdminNavBar from './AdminNavBar';
import Footer from './Footer';

export default function GenerateReport(){
    const [users, setUsers] = useState([]);

    useEffect(() =>{
            function getUsers() {
                axios.get("http://localhost:5000/user/all").then((res)=>{
                    setUsers(res.data);
                }).catch((err)=>{
                    alert(err.message);
                })
            }
            getUsers();
    },[])

    function jsPdfGenerator(){

        //new document in jspdf
        var doc = new jsPdf('p','pt');
      
        
        doc.autoTable({  html:'#users-table' })
      
        doc.autoTable({
          columnStyles: { europe: { halign: 'center' } }, 
          margin: { top: 10 },
        })
      
        //save the pdf
        doc.save("users.pdf");
      }
    return(
        <>
        <AdminNavBar/>
        <div class='container'>
            <br/><br/><br/><br/>
            <center><h2>Details of Users</h2></center>
            <div className="d-grid" style={{width:10, marginLeft:950, marginRight:100, marginTop:20}}>
                    <input type="button" value="Print Report" onClick={() => jsPdfGenerator()} className="btn btn-warning"/>
                </div>
                <br/>
            <table id="users-table" class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    
                    </tr>
                </thead>
                <tbody>
                {users.map((val,key)=>{
                    return <tr>
                        <td>{val.firstName}</td>
                        <td>{val.lastName}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                    </tr>

                })}
                </tbody>
                </table>
                
        </div>
        
        </>
    )
}