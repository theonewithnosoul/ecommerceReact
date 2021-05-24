
import React from 'react'
import Item from './Item';




const ItemList = ({ stock = [] }) => {

    return (
        <div className="container">
            <div className="row d-flex">
                {stock?.map(item => <Item buyButton='Comprar' item={item} />)}
            </div>
        </div>
    )
}



export default ItemList