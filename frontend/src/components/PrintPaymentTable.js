import React from 'react';
import './DownloadInvoice.css'



const PrintPaymentTable = ({Payment_Details }) => {
    

    
    
    return(
        <>
        
            <tr>
                <td className='td'>{Payment_Details.Pay_ID}</td>
                <td className='td'>{Payment_Details.BanK_Owner_Name}</td>

                <td className='td'>{Payment_Details.Order_ID}</td>
                <td className='td'>{Payment_Details.Totle_price}</td>

                
                <td className='td'>{Payment_Details.Pay_date.substring(0,10)}</td>

                

                
            
                
            </tr>
            
            
        </>
        
    )
}

export default PrintPaymentTable;