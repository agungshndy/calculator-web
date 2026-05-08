import { useState } from "react";
function Calculator() {
  
  const [value, setValue] = useState('');

  const handleButton = (btn) => {
    if (btn === 'C') {
      setValue('');
    }
    else if (btn === 'CE') {
      setValue(prev => prev.slice(0,-1));
    }
    else if (btn === '=') {
      try {
        const expr = value.replace(/X/g, '*').replace(/,/g, '.');
        const result = Function('"use strict"; return (' + expr + ')')();
        setValue(String(result));
      }
      catch {
        setValue('Error');
      }
    } else if (btn === '%') {
      setValue(prev => String(parseFloat(prev) / 100));
    } else {
      setValue(prev => prev + btn);
    }
  }

  return (
    <>
      {/* <input value={value} onChange={() => {}} id="field" /> */}

      <div className="Calculator">
        <div className="text-center mt-4">
          <h2>Try it here!</h2>
        </div>

        {/* Calculator Main Base */}
        <div className="calcBody">
          <div className="flex items-center justify-center w-full">
            <input className="mx-4 my-6 border-1 rounded-md" value={value} onChange={() => {}} name="number" id="field" />
          </div>

          <div className="m-4 grid grid-cols-4 gap-2">
            {/* <div className="btn flex border-1 rounded-md cursor-pointer text-center items-center justify-center justify-items-center">button</div> */}
            <button onClick={()=> handleButton('7')}>7</button>
            <button onClick={()=> handleButton('CE')}>CE</button>
            <button onClick={()=> handleButton('C')}>C</button>
            <button onClick={()=> handleButton('Delete')}>delete icon</button><button>%</button>
            <button onClick={()=> handleButton('8')}>8</button>
            <button onClick={()=> handleButton('9')}>9</button>
            <button onClick={()=> handleButton('/')}>/</button>
            <button onClick={()=> handleButton('7')}>7</button>
            <button onClick={()=> handleButton('8')}>8</button>
            <button onClick={()=> handleButton('9')}>9</button>
            <button onClick={()=> handleButton('X')}>X</button>
            <button onClick={()=> handleButton('4')}>4</button>
            <button onClick={()=> handleButton('5')}>5</button>
            <button onClick={()=> handleButton('6')}>6</button>
            <button onClick={()=> handleButton('-')}>-</button>
            <button onClick={()=> handleButton('1')}>1</button>
            <button onClick={()=> handleButton('2')}>2</button>
            <button onClick={()=> handleButton('3')}>3</button>
            <button onClick={()=> handleButton('+')}>+</button>
            <button onClick={()=> handleButton('0')}>0</button>
            <button onClick={()=> handleButton('.')}>,</button>
            <button className="col-span-2">=</button>
          </div>
        </div>
      </div>
    </>
  )

}

export default Calculator;