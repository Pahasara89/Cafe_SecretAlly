import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import HomeNavBar from './HomeNavBar';
import CarouselContainer from './CarouselContainer';



export default function home(){
    return(
        <div className='back'>
            <HomeNavBar/>
            <CarouselContainer />
            <Cards/>
            <Footer/>
        </div>
    )
}