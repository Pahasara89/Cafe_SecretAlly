import React from 'react';
import AdminCards from './AdminCards';
import AdminNavBar from './AdminNavBar';
import AdminFooter from './AdminFooter';


export default function AdminHome(){
    return(
        <div className='back'>
            <AdminNavBar/>
            <AdminCards/>
            <AdminFooter/>
        </div>
    )
}