import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import jsPdf from 'jspdf';
import 'jspdf-autotable';
import AdminNavBar from './AdminNavBar';
import Footer from './Footer';

export default function AllUser(){
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

    function deleteUsers(id){
        Swal.fire({
            title: 'Are You Sure?',
            text: 'Once deleted, You will not able to recover these details !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'

        }).then((res)=>{
            if(res.isConfirmed)
            {axios.delete(`http://localhost:5000/user/delete/${id}`);
            Swal.fire({
                title: 'Success!',
                text: 'Delete user Successfully',
                icon: 'success',
                showConfirmButton: false,
                
        });}
    }).catch((err)=>{
        Swal.fire({
            title: 'Error!',
            text: "Couldn't delete user",
            icon: 'error',
    });
    });

    setTimeout(()=>{
        window.location.replace("http://localhost:3000/allu");
    },3000)

    }
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
                    <input type="button" value="Generate Report" onClick={() => jsPdfGenerator()} className="btn btn-warning"/>
                </div>
                <br/>
            <table id="users-table" class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((val,key)=>{
                    return <tr>
                        <td>{val.firstName}</td>
                        <td>{val.lastName}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                        <td>
                            &nbsp;
                            <button onClick={()=>deleteUsers(val._id)} type="button" class="btn btn-outline-danger">Remove</button>
                        </td>
                    </tr>

                })}
                </tbody>
                </table>
                
        </div>
        
        </>
    )
}