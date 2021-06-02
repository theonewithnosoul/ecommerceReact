
import React from 'react'
import Item from './Item';




const ItemList = ({items = [] }) => {

    return (
        <div className="container">
            <div className="row d-flex">
                {items?.map(item => <Item key={item.id}  item={item} />)}
            </div>
        </div>
    )
}



export default ItemList