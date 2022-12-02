import NavigationBar from "../NavigationBar/NavigationBar"
import React, { useEffect, useState } from 'react';
import menu from './menu.png'

export const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handlerIsVisible = (event) => {
        setIsVisible(event)
    };

    return (
       <div>
        <button className="menu"><img src={menu} alt="menu burger" onClick={() => {
            if (isVisible) {
                setIsVisible(false)
            }
            else {
                setIsVisible(true)
            }
        }} /></button>
        { isVisible ? <NavigationBar className="navBar" isVisible={handlerIsVisible}></NavigationBar> : <view></view>}
       </div>
    )
}