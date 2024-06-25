import React from 'react'
import './OutputFieldComponent.css'

export const OutputFieldComponent = ({userInput}) => {
    const changeString = (string, target, change) =>{
        if (!string){
            return string
        }
        while (string.includes(target)){
            string = string.slice(0, string.indexOf(target))  + change + string.slice(string.indexOf(target)+1, string.length)
        }
        return string
        
    }

    const processUserInput = (userInput) => {
        
        userInput = changeString(userInput, "√", "Math.sqrt")
        userInput = changeString(userInput, "÷", "/")
        userInput = changeString(userInput, "^", "**")
        
        return userInput
    }
    const userInputProcessed = processUserInput(userInput)
    
    try{
        // eslint-disable-next-line no-eval
        var answer = eval(userInputProcessed)
    }catch{}

    return(
    <div className = "OutputField">
        <p className='OutputText'>{answer}</p>
        {/* <p>{userInputProcessed}</p> */}
    </div>
    )
}
