import React from 'react'

const ItemDetail = ({item}) =>{

    return(
        <>
        <img src={item?.imagw} alt="product-image"/>
        <h2>{item?.title}</h2>
        <p>{item?.description}</p>
        <div>${item?.price}</div>
        </>
    )

}
export default ItemDetail