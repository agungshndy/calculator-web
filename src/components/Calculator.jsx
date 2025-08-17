function Calculator() {
  return (
    <>
      <div className="Calculator">
        <div className="text-center">
          <h2>Calculate Here</h2>
        </div>

        {/* Calculator Main Base */}
        <div className="calcBody">
          <div className="flex items-center justify-center w-full">
            <input className="mx-4 my-6 border-1 rounded-md" type="text" name="number" id="field" />
          </div>

          <div className="m-4 grid grid-cols-4 gap-2">
            {/* <div className="btn flex border-1 rounded-md cursor-pointer text-center items-center justify-center justify-items-center">button</div> */}
            <button>7</button>
            <button>CE</button>
            <button>C</button>
            <button>delete icon</button><button>%</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>X</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>0</button>
            <button>,</button>
            <button className="col-span-2">=</button>
          </div>
        </div>
      </div>
    </>
  )

}

export default Calculator;