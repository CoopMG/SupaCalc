import React from 'react'
import './InputFieldComponent.css'

export const InputFieldComponent = ({userInput}) => {

    return(
    <div className = "InputField">
        <p className='InputText'>{userInput}</p>
    </div>
    )
}
