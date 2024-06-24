import React from 'react'
import './LogoComponent.css'
import logo from '../../assets/SupaCalcNameLogo.svg';

export const LogoComponent = () => {
    return(
    <img className = "logo" alt = "SupaCalc Logo" src = {logo}/>

    )
}
