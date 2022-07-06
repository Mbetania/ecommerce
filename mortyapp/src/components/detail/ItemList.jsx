import React from 'react'
import Item from '../detail/Item'
import Count from '../unit/Count'

const ItemList = ({ items }) => {
  return (
    <section>
            
            <>
                {items?.map((producto) => {
                    return <Item key={producto.id} producto={producto} />
                    
                })}
            </>
        </section>
        
  )
}

export default ItemList