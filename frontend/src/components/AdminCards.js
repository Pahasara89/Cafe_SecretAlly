import React from 'react'
import CardItem from './CardItem'
import './AdminCards.css'

function AdminCards() {
  return (
    <div className='cards'>
      <h1>Hello Admin</h1>
      <h1>Welcome to Cafe SecretAlly Management Section</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/product.png"
                    text="Manage Products Details"
                    label="Product Management"
                    path="/view"
                />
                <CardItem
                    src="images/delivery.gif"
                    text="Manage Delivere Details"
                    label="Delivery Management"
                    path="/add-delivery"
                />

                
            </ul>

            <ul className='cards__items'>

                <CardItem
                    src="images/user.gif"
                    text="Details of Users"
                    label="User Management"
                    path="/userManagement"
                />

               

                <CardItem
                    src="images/payment.gif"
                    text="Details of Payment"
                    label="User Management"
                    path="/view_Payment"
                />

              
            </ul>
            
        </div>
      </div>
    </div>
  )
}

export default AdminCards