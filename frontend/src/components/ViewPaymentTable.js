import React from 'react';
import './DownloadInvoice.css'



const ViewPaymentDetailsTable = ({Payment_Details , handleEditClick, handleDeleteClick }) => {
    
    const handleviweClick = (id) =>{

        window.location.href=`view_Payment_Details/${id}`

    }
    
    
    return(
        <>
        
            <tr>
                <td className='td'>{Payment_Details.Pay_ID}</td>
                <td className='td'>{Payment_Details.BanK_Owner_Name}</td>

                <td className='td'>{Payment_Details.Order_ID}</td>
                <td className='td'>{Payment_Details.Totle_price}</td>

                
                <td className='td'>{Payment_Details.Pay_date.substring(0,10)}</td>

                

                
            
                <td>
                    <button type="button" onClick={(e) => handleEditClick(e,Payment_Details)}className="btn btn-outline-success">Edit</button>
                    <button type="button" onClick={()=>{handleviweClick(Payment_Details._id)}} className="btn btn-outline-warning">View</button>
                    <button type="button" onClick={() => handleDeleteClick(Payment_Details._id)}className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
            
            
        </>
        
    )
}

export default ViewPaymentDetailsTable;