import React from 'react'
import {getData} from '../mocks/productos'
import { useEffect, useState } from 'react'
import ItemList from '../components/detail/ItemList'
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

      return (
        <div>
            <h2>Bienvenido</h2>
            {loading?(
                <span>loading..</span>
            ):(
            <ItemList items={items}/>
            )}
            
        </div>
      )
    }
    
    export default ItemListContainer
    
