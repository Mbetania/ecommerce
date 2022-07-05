import React from 'react'
import { Link } from 'react-router-dom'
import Count from '../components/unit/Count'

const Item = ({produ}) => {
    console.log('produ', produ)
  return (
    <article >
            <h2>{produ.nombre}</h2>
            
            <img src="https://picsum.photos/200/150"  />
            <p>Precio: ${produ.id}</p>
            {/* <Link to={`/item/${produ.id}`}>Ver detalle</Link> */}
            <div>
              <Count stock={5} initial={1}/>
            </div>
        </article>
  )
}

export default Item