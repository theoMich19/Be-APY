import React, { useState } from 'react';
import Menu from '../img/menu.png'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import informPage from './informPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CatInfections from '../components/Categories/CatInfections';
import CatConception from '../components/Categories/CatConception';
import CatContraception from '../components/Categories/CatContraception';
import CatCorps from '../components/Categories/CatCorps';


import 'react-slideshow-image/dist/styles.css'

export const CardPage = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handlerIsVisible = (event) => {
        setIsVisible(event)
    };
    
    return (
       <div>
        { isVisible ? <NavigationBar className="navBar" isVisible={handlerIsVisible}></NavigationBar> : <div> <button className="menu">
            <img src={Menu} alt="menu burger" onClick={() => setIsVisible(true)} />
         </button></div>}

         <h1 className='h1Informer'>NOM CATEGORIE</h1>

         <Slide>
            <div className="each-slide-effect">
                <div>
                    <CatInfections></CatInfections>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <CatContraception></CatContraception>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <CatConception></CatConception>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <CatCorps></CatCorps>
                </div>
            </div>
        </Slide>
       </div>
    )
   
   }
   