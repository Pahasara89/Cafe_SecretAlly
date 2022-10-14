import React from 'react';


const ViewDeliveryTable = ({delivery , handleEditClick, handleDeleteClick}) => {
    return(
        <>
            <tr>
                <td className='td'>{delivery.deliveryId}</td>
                <td className='td'>{delivery.customerName}</td>
                <td className='td'>{delivery.orderID}</td>
                <td className='td'>{delivery.customerContactNumber}</td>
                <td className='td'>{delivery.deliveryAddress}</td>
                <td className='td'>{delivery.noofOrders}</td>
                <td className='td'>{delivery.driverName}</td>
                <td className='td'>{delivery.driverContactNumber}</td>
                <td className='td'>{delivery.deliveryDate}</td>  
                <td>
                    <button type="button" onClick={(e) => handleEditClick(e,delivery)} className="btn btn-outline-success">Update</button>
                    <button type="button" onClick={() => handleDeleteClick(delivery._id)} className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
            
            
        </>
        
    )
}

export default ViewDeliveryTable;