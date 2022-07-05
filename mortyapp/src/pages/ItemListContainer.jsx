import React from 'react'
import {getData} from '../mocks/productos'
import { useEffect, useState } from 'react'
import ItemList from '../detail/ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router'

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    // const {idSection} = useParams()
    // console.log(idSection)

    useEffect(() => {
        toast.info('cargando cuadros')
        getData
            .then((result) => {setItems(result)})
            .catch((error) =>{toast.error('Error al traer cuadros', error)})
            .finally(()=> setLoading(false))
    }, [])
    // if (loading){
    //     return <h2>cargando</h2>
    // } else{
    //     return <ItemList isLoading={loading} productos={items}/>
    // }
      return (
        <div>
            <h2>Bienvenido</h2>
            {loading?(
                <span>loading..</span>
            ):(
            <ItemList items={items}/>
            )}
            
            {/* <ul>
                {items.map((producto) =>{
                return <li>{producto.nombre}</li>
                })}
            </ul> */}
        </div>
      )
    }
    
    export default ItemListContainer
    
