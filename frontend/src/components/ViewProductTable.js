import React from 'react';
import './DownloadInvoice.css'

const ViewProductTable = ({product , handleEditClick, handleDeleteClick}) => {
    return(
        <>
            <tr>
                <td className='td'>{product.productID}</td>
                <td className='td'>{product.productName}</td>
                <td className='td'>{product.category}</td>
                <td className='td'>{product.date}</td>
                <td className='td'>{product.size}</td>
                <td className='td'>{product.price}</td>
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
                    <button type="button" onClick={() => handleDeleteClick(product._id)}className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
            
            
        </>
        
    )
}

export default ViewProductTable;