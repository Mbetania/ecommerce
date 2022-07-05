import React from 'react'
import Count from '../unit/Count'

const ItemDetail = ({array}) => {
return (
    <div className='d-flex  flex-wrap p-2 flex-fill bd-highlight'>
        {array.map((item)=>{
            return (
                <div className='shadow-sm p-3 mb-5 bg-body rounded card text-center'>
                    <div className='card-header'>
                        <h2>{item?.name}</h2>
                    </div>
                    <div className="card-body ">
                        <img src={item?.image}/>  
                        <h5 className='card-title'>{item?.species}</h5>
                        <p className='cardt-text'>{item?.status}</p>
                    </div>
                    <span>{item?.origin.name}</span>
                    <Count stock={5} initial={1} />
                </div>
                
                )
                        
            })}
    </div>
)
}






export default ItemDetail