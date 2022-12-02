import React, { useState } from 'react';
import Menu from '../img/menu.png'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import informPage from './informPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CatContraception from '../components/Categories/CatContraception';
import CatContraception1 from '../components/Categories/CatContraception1';


import 'react-slideshow-image/dist/styles.css'

export const CardPageContraception = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handlerIsVisible = (event) => {
        setIsVisible(event)
    };
    
    return (
       <div>
        { isVisible ? <NavigationBar className="navBar" isVisible={handlerIsVisible}></NavigationBar> : <div> <button className="menu">
            <img src={Menu} alt="menu burger" onClick={() => setIsVisible(true)} />
         </button></div>}

         <h1 className='h1Informer'>Contraception</h1>

         <Slide autoplay= "false">
            <div className="each-slide-effect">
                <div>
                    <CatContraception></CatContraception>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                <CatContraception1></CatContraception1>
                </div>
            </div>
        </Slide>
       </div>
    )
   
   }
   