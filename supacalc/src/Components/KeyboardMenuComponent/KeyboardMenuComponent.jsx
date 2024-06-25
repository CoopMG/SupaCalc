import React from 'react'
import './KeyboardMenuComponent.css'
import keyboardMenu from '../../assets/KeyboardImg.svg';

export const KeyboardMenuComponent = () => {

    var currentKeyboard = 'Basic';

    return(
    <div className = "keyboard-menu">
        <img className = "keyboard-menu-img" alt = "Right sidebar menu" src = {keyboardMenu}/>
        <p className = "keyboard-text">{currentKeyboard}</p>
    </div>
    )
}
