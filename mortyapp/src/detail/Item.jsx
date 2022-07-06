import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Count from '../components/unit/Count'

const Item = ({produ}) => {
  const [value, setValue] = useState('')

  const addTo = e =>{
    const {valor} = e.target
    setValue(value + valor)
    console.log(e.target.valor)

  }
  return (
    <article >
            <h2>{produ.nombre}</h2>
            <img src="https://picsum.photos/200/150"  />
            <p>Precio: ${produ.id}</p>
            {/* <Link to={`/item/${produ.id}`}>Ver detalle</Link> */}
            <div>
              <Count stock={5} initial={1}/>
              <button onClick={addTo} valor='0' >Agregar</button> 
            </div>
        </article>
  )
}

export default Item