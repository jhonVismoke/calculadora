import { useState } from 'react'

import './CalculatorStyle.css'

const Calculator = () => {
    const buttonLabels = ['AC','+/-','%','/','7','8','9','X','4','5','6','-','1','2','3','+','0',',','='];

    const [buttons, setButtons] = useState(buttonLabels)
    const [result, setResult] = useState(0)
    const [oldNum , setOldNum] = useState(0)
    const [operator,setOperator] = useState()

    const handleClick = (e) =>{
      const num = e.target.value
      if(result === 0){
        setResult(num)
      }else{
        setResult(result + num)
      }
      if(num === 'AC'){
        clear()
      }else if(num === '%'){
        porcentage()
      }else if(num === '+' || num === '-' || num === 'X' || num === '/'){
        operatorHandler(num)
      }else if(num === '+/-'){
        changeSign()
      }else if(num === '='){
        calculate()
      }
    }
    const clear = () =>{
      setOldNum(0)
      setResult(0)
    }
    const porcentage = () =>{
      setResult(result / 100)
    }
    const changeSign = () =>{
      if(result >0){
        setResult(-result)
      }else{
        setResult(Math.abs(result))
      }
    }
    const operatorHandler = (operatorInput) =>{
      setOperator(operatorInput)
      setOldNum(result)
      setResult(0)
    }
    const calculate = () =>{
      if(operator === '/'){
        setResult(parseFloat(oldNum) / parseFloat(result))
      }else if(operator === 'X'){
        setResult(parseFloat(oldNum) * parseFloat(result))
      }else if( operator === '+'){
        setResult(parseFloat(oldNum) + parseFloat(result))
      }else if(operator === '-'){
        setResult(parseFloat(oldNum) - parseFloat(result))
      }
    }

  return (
    <div className='container'>
        <p className={oldNum > 0 ? 'visibility' : 'hidden'}>{oldNum}</p>
        <h1 className='result'>{result}</h1>
     <div className='wrapper'>
     {buttons.map((label, index) =>(
        <button 
        value={label}
        onClick={handleClick}
        key={label}
        className={
            label === '/' ||
            label === 'X' ||
            label === '-' ||
            label === '+' ? 'blue' : 
            label === 'AC' ||
            label === '+/-' ||
            label === '%' ||
            label === '=' ? 'white' : ''
        }
        >{label}</button>
     ))}
     </div>
    </div>
  )
}

export default Calculator