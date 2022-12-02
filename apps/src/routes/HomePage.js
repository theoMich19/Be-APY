import BtnHomepage from '../components/BtnHomepage'
import homePage from './homePage.css'
import React, { useState } from 'react'; 
import Mascotte from '../img/mascotte.png'
import Menu from '../img/menu.png'
import NavigationBar from '../components/NavigationBar/NavigationBar'

export const HomePage = () => {

   const [isVisible, setIsVisible] = useState(false);

    const handlerIsVisible = (event) => {
        setIsVisible(event)
    };

    return (
       <div className='screen'>        
        { isVisible ? <NavigationBar className="navBar" isVisible={handlerIsVisible}></NavigationBar> : <div> <button className="menu">
            <img src={Menu} alt="menu burger" onClick={() => setIsVisible(true)} />
         </button></div>}
        <h1 className='h1'>Be'APY</h1>
        <p className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at laoreet nulla, ut sollicitudin nulla. Vivamus eu interdum dolor. Nam eleifend mollis faucibus. Nulla id mi eu risus consectetur faucibus a et tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ultrices velit risus, id dapibus mauris pharetra eu.
        </p>
        <img src={Mascotte} className="imgMascotte" alt=""/>
           <BtnHomepage/>
       </div>
    )
   }
   
