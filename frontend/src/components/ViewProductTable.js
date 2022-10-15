import React from 'react';
import './DownloadInvoice.css'
import {Link} from "react-router-dom";

const ViewProductTable = ({product , handleEditClick, handleDeleteClick}) => {
    return(
        <>
            <tr>
                <td className='td'>{product.productID}</td>
                <td className='td'>{product.productName}</td>
                <td className='td'>{product.category}</td>
                <td className='td'>{product.date.substring(0,10)}</td>
                <td className='td'>{product.size}</td>
                <td className='td'>LKR.{product.price}.00</td>
                <td className='td'>{product.quantity}{product.unit}</td>
                <td>
                    {(() => {

                        if (product.quantity <= 25) {

                        return (

                            <div style={{backgroundColor:'red',color:'white',textAlign:'center'}}>Low</div>

                        )

                    } else {

                        return (
          
                          <div style={{backgroundColor:'Green',color:'white',textAlign:'center'}}>Available</div>
          
                        )
          
                      }
          
                  })()}
                </td>
                <td>
                    <button type="button" onClick={(e) => handleEditClick(e,product)}className="btn btn-outline-success">Edit</button>
                    <Link to ='/view-admin'><button type="button" className="btn btn-outline-warning">View</button></Link>
                    <button type="button" onClick={() => handleDeleteClick(product._id)}className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
            
            
        </>
        
    )
}

export default ViewProductTable;