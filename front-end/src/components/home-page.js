import React from 'react';
import Heading from './heading'
import NavButton from './nav-button';
import './home-page.css';
function HomePage(){
    return(
        <main className='home-main' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/home-page.jpg'})` }}>
            <Heading></Heading>
            <div className='menu-container'>
               <NavButton buttonName="My rooms"/>
               <NavButton buttonName="Join a room"/>
               <NavButton buttonName="Create a room"/>
            </div>
        </main>
    )
}
export default HomePage