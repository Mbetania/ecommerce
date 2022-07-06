import React, { useState } from 'react'


const Count = ({miProp, stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const handlerClickAdd = () => {
        if (count<stock){
            setCount(count+1)
        }
    }
    const handlerClickSubtrack = () =>{
        if(count > 1){
            setCount(count-1)
        }
    }
    const handlerReset = () => {
        setCount(0)
    }
return (
    <>
        <div>{miProp}</div>
        {/* <h1>{numero}</h1> */}
        {/* <input type="text" onKeyUp={handleKeyUp} /> */}
        <span> mi contador va : {count}</span>
        <button onClick={handlerClickAdd}> + </button>
        <button onClick={handlerReset}>resetear</button>
        <button onClick={handlerClickSubtrack}> - </button>
    </>
)
}

export default Count