import './CalculatorButtonsComponent.css'

export const CalculatorButtonsComponent = ({userInput, setUserInput}) => {

    const handleClick = (newText) => {
        if (newText === "C"){
            if (userInput.length > 0){
                if (userInput.slice(userInput.length-3, userInput.length) === "ANS"){
                    setUserInput(userInput.slice(0, -3));
                    return;
                }
                else{
                    if (userInput.slice(userInput.length-2, userInput.length) === "√("){
                        setUserInput(userInput.slice(0, -2));
                        return;
                    }
                }
            
                setUserInput(userInput.slice(0, -1));
            }
            return;
        }
        
        
        if (newText === "√"){
            setUserInput(userInput + newText + "(")
            return;
        }
        
        setUserInput(userInput + newText)
    }

    return(
    <div className = "ButtonsContainer">
        <div className='TopRow'>
            <button onClick={() => handleClick("(")} className='btn Topbtn'>
                <p className='btnText'>(</p>
            </button>
            <button onClick={() => handleClick(")")} className='btn Topbtn'>
                <p className='btnText'>)</p>
            </button>
            <button onClick={() => handleClick("^")} className='btn Topbtn'>
                <p className='btnText'>^</p>
            </button>
            <button onClick={() => handleClick("√")} className='btn Topbtn'>
                <p className='btnText'>√</p>
            </button>
            <button onClick={() => handleClick("C")} className='btn Topbtn Lastbtn'>
                <p className='btnText'>C</p>
            </button>
        </div>

        <div className='Row'>
            <button onClick={() => handleClick("1")} className='btn'>
                <p className='btnText'>1</p>
            </button>
            <button onClick={() => handleClick("2")} className='btn'>
                <p className='btnText'>2</p>
            </button>
            <button onClick={() => handleClick("3")} className='btn'>
                <p className='btnText'>3</p>
            </button>
            <button onClick={() => handleClick("÷")} className='btn Lastbtn'>
                <p className='btnText'>÷</p>
            </button>
        </div>
        
        <div className='Row'>
            <button onClick={() => handleClick("4")} className='btn'>
                <p className='btnText'>4</p>
            </button>
            <button onClick={() => handleClick("5")} className='btn'>
                <p className='btnText'>5</p>
            </button>
            <button onClick={() => handleClick("6")} className='btn'>
                <p className='btnText'>6</p>
            </button>
            <button onClick={() => handleClick("*")} className='btn Lastbtn'>
                <p className='btnText'>*</p>
            </button>
        </div>
        
        <div className='Row'>
            <button onClick={() => handleClick("7")} className='btn'>
                <p className='btnText'>7</p>
            </button>
            <button onClick={() => handleClick("8")} className='btn'>
                <p className='btnText'>8</p>
            </button>
            <button onClick={() => handleClick("9")} className='btn'>
                <p className='btnText'>9</p>
            </button>
            <button onClick={() => handleClick("-")} className='btn Lastbtn'>
                <p className='btnText'>-</p>
            </button>
        </div>
        

        <div className='Row'>
            <button onClick={() => handleClick("ANS")} className='btn'>
                <p className='btnText'>ANS</p>
            </button>
            <button onClick={() => handleClick("0")} className='btn'>
                <p className='btnText'>0</p>
            </button>
            <button onClick={() => handleClick(".")} className='btn'>
                <p className='btnText'>.</p>
            </button>
            <button onClick={() => handleClick("+")} className='btn Lastbtn'>
                <p className='btnText'>+</p>
            </button>
        </div>
    </div>
    )
}
