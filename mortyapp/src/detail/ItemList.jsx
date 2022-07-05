import React from 'react'
import Item from './Item'

const ItemList = ({ items, isLoading }) => {
  return (
    <section>
            
            <>
                {items?.map((produ) => {
                    return <Item key={produ.id} produ={produ} />
                })}
            </>
        </section>
        
  )
}

export default ItemList