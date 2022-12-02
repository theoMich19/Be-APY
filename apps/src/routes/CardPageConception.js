import React, { useState } from 'react';
import Menu from '../img/menu.png'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import informPage from './informPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CatConception from '../components/Categories/CatConception';
import CatConception1 from '../components/Categories/CatConception1';


import 'react-slideshow-image/dist/styles.css'

export const CardPageConception = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handlerIsVisible = (event) => {
        setIsVisible(event)
    };
    
    return (
       <div>
        { isVisible ? <NavigationBar className="navBar" isVisible={handlerIsVisible}></NavigationBar> : <div> <button className="menu">
            <img src={Menu} alt="menu burger" onClick={() => setIsVisible(true)} />
         </button></div>}

         <h1 className='h1Informer'>Conception et grossesse</h1>

         <Slide autoplay= "false">
            <div className="each-slide-effect">
                <div>
                    <CatConception></CatConception>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                <CatConception1></CatConception1>
                </div>
            </div>
        </Slide>
       </div>
    )
   
   }
   