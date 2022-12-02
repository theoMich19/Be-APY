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
        <h1 className='titleApps'>Be'APY</h1>
        <p className='text'>
        Dans le cadre de la nuit de l’Info la DReAM Team vous propose Be’Apy. Nombres d’entre nous sont trop peu informés vis-à-vis des infections sexuellement transmissibles (IST) et de la sexualité en global. Be’Apy est un serious game qui vous permettra d’acquérir des connaissances en répondant à des séries quizz. Montez progressivement les niveaux, faites évoluez vos connaissances jusqu’à atteindre le sommet de notre leaderboard global, vous pourrez alors comparer votre score avec les 6 meilleurs utilisateurs !
        </p>
        <img src={Mascotte} className="imgMascotte" alt=""/>
           <BtnHomepage/>
       </div>
    )
   }
   
