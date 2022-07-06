import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Count from '../unit/Count'

const Item = ({producto}) => {
    console.log('produ', producto)
  return (
    <article >
            <h2>{producto.title}</h2>
            <img src="https://picsum.photos/200/150"  />
            <p>Precio: ${producto.price}</p>
            <Link to={`/producto/${producto.category}`}>Ver detalle</Link>
            <Count stock={5} initial={1} />
        </article>
  )
}

export default Item