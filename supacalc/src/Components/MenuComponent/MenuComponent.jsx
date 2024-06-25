import React from 'react'
import './MenuComponent.css'
import menu from '../../assets/Menu.svg';

export const MenuComponent = () => {

    var currentCalculatorType = 'Standard';

    return(
    <div className = "menu">
        <img className = "menu-img" alt = "Left sidebar menu" src = {menu}/>
        <text className = "calc-type-text">{currentCalculatorType}</text>
    </div>
    )
}
