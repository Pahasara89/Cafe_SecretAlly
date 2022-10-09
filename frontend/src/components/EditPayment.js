import React from 'react';

const EditPayment = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            
            <td>
                
            </td>
            
            <td>
                <input type="text" required="required"name="BanK_Owner_Name" value={editFormData.BanK_Owner_Name} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" required="required"name="Order_ID" value={editFormData.Order_ID} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" required="required"name="Totle_price" value={editFormData.Totle_price} onChange={handleEditFormChange}/>
            </td>
            <td>

            </td>
            
            <td>
                <button type="submit"className="btn btn-outline-success">Save</button>
                <button type="button" onClick={handleCancelClick}className="btn btn-outline-danger">Cancel</button>
            </td>
        </tr>
    )
}

export default EditPayment;