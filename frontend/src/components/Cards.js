import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/Pizza.webp"
                    text="Enjoy you meal with Ceylon Spices"
                    label="Pizza"
                    path="/pizza"
                />
                <CardItem
                    src="images/burgers.jpg"
                    text="Dress Like a Gentlemen"
                    label="Burgers"
                    path="/burgers"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                    src="images/shawarma.jpg"
                    text="Wear Like a Queen"
                    label="Shawarma"
                    path="/shawarma"
                />
                <CardItem
                    src="images/Hotdogs.jpg"
                    text="Products made by Coconut"
                    label="Hot Dogs "
                    path="/hotdogs"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
