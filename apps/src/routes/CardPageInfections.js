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
import CatInfections1 from '../components/Categories/CatInfections1';
import CatConception1 from '../components/Categories/CatConception1';
import CatContraception1 from '../components/Categories/CatContraception1';
import CatCorps1 from '../components/Categories/CatCorps1';

import 'react-slideshow-image/dist/styles.css'

export const CardPageInfections = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handlerIsVisible = (event) => {
        setIsVisible(event)
    };
    
    return (
       <div>
        { isVisible ? <NavigationBar className="navBar" isVisible={handlerIsVisible}></NavigationBar> : <div> <button className="menu">
            <img src={Menu} alt="menu burger" onClick={() => setIsVisible(true)} />
         </button></div>}

         <h1 className='h1Informer'>Infections et maladies</h1>

         <Slide autoplay= "false">
            <div className="each-slide-effect">
                <div>
                    <CatInfections></CatInfections>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                <CatInfections1></CatInfections1>
                </div>
            </div>
        </Slide>
       </div>
    )
   
   }
   