import React, { useState } from 'react';
import Menu from '../img/menu.png'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import informPage from './informPage.css'
import { Link } from 'react-router-dom';

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

         <h1 className='h1Informer'>Se renseigner</h1>
         <div className='CategoryColumn'>
        <div className='CategoryLine'><Link to="/CardPageInfections" className='largeCell' >Infections et maladies</Link><Link to="/CardPageConception" className='shortCell'>Conception et grossesse</Link></div>
        <div className='CategoryLine'><Link to="/CardPageContraception" className='shortCell'>Contraception</Link><Link to="/CardPageCorps" className='largeCell'>Connaitre son corps et sa sexualité</Link></div>
        </div>
       </div>
    )
   
   }
   