import React, { useState } from 'react';
import Menu from '../img/menu.png'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import informPage from './informPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CatCorps from '../components/Categories/CatCorps';
import CatCorps1 from '../components/Categories/CatCorps1';


import 'react-slideshow-image/dist/styles.css'

export const CardPageCorps = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handlerIsVisible = (event) => {
        setIsVisible(event)
    };
    
    return (
       <div>
        { isVisible ? <NavigationBar className="navBar" isVisible={handlerIsVisible}></NavigationBar> : <div> <button className="menu">
            <img src={Menu} alt="menu burger" onClick={() => setIsVisible(true)} />
         </button></div>}

         <h1 className='h1Informer'>Connaître son corps et sa sexualité</h1>

         <Slide autoplay= "false">
            <div className="each-slide-effect">
                <div>
                    <CatCorps></CatCorps>
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                <CatCorps1></CatCorps1>
                </div>
            </div>
        </Slide>
       </div>
    )
   
   }
   