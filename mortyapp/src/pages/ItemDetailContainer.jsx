import React from 'react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ItemDetail from '../components/detail/ItemDetail'



const ItemDetailContainer = () => {
    const [characterList, setCharactersList]= useState([])
    const [loading, setLoading] = useState(true)
    const url = 'https://rickandmortyapi.com/api/character'
    
    const getCharacter= async(character) =>{
        setLoading(true)
        try{
            const result = await fetch(url)
            const characters = await result.json()
            setCharactersList(characters.results)
            console.table(characters.results)
        }catch(error){
            toast.error('error')
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
            getCharacter()
    },[])

    return(
        <div className='d-flex justify-content-evenly '>
        </div>
    )

// if (loading) {
//     return <h1>cagando..</h1>
// }else {
//     return {item.map((character)=> <ItemDet key={character.id} algo={character}/>)}
// }
}
export default ItemDetailContainer