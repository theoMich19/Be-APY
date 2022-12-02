import NavigationBar from "../components/NavigationBar/NavigationBar.js"
import React, { useState } from 'react';
import menu from '../assets/images/menu.png'

export const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handlerIsVisible = (event) => {
        setIsVisible(event)
    };

    return (
       <div>
        <button className="menu"><img src={menu} alt="menu burger" onClick={() => setIsVisible(true)} /></button>
        { isVisible ? <NavigationBar className="navBar" isVisible={handlerIsVisible}></NavigationBar> : <view></view>}
       </div>
    )
}