import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>-------Featured Products-------</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/Pizza.webp"
                    text="Feed Your Soul With Pizza "
                    label="Pizza"
                    path="/pizza"
                />
                <CardItem
                    src="images/burgers.jpg"
                    text="You like burgers? Then you’ll love ours"
                    label="Burgers"
                    path="/burgers"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                    src="images/shawarma.jpg"
                    text="There’s something in our shawarma that makes everyone want more"
                    label="Shawarma"
                    path="/shawarma"
                />
                <CardItem
                    src="images/Hotdogs.jpg"
                    text="Hot and fresh, just the way you like it"
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
