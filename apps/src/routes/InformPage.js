import React, { useState } from 'react';
import Menu from '../img/menu.png'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import informPage from './informPage.css'

export const InformPage = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handlerIsVisible = (event) => {
        setIsVisible(event)
    };
    
    return (
       <div>
        { isVisible ? <NavigationBar className="navBar" isVisible={handlerIsVisible}></NavigationBar> : <div> <button className="menu">
            <img src={Menu} alt="menu burger" onClick={() => setIsVisible(true)} />
         </button></div>}

         <h1 className='h1Informer'>S'informer</h1>
         <div className='CategoryColumn'>
        <div className='CategoryLine'><button className='largeCell'>Infections et maladies</button><button className='shortCell'>Conception et grossesse</button></div>
        <div className='CategoryLine'><button className='shortCell'>contraception</button><button className='largeCell'>Connaitre son corps et sa sexualité</button></div>
        </div>
       </div>
    )
   
   }
   