import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({produ}) => {
    console.log('produ', produ)
  return (
    <article >
            <h2>{produ.nombre}</h2>
            
            <img src="https://picsum.photos/200/150"  />
            <p>Precio: ${produ.id}</p>
            {/* <Link to={`/item/${produ.id}`}>Ver detalle</Link> */}
        </article>
  )
}

export default Item