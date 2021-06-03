
import React from 'react'
import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';
import logo from '../components/images/logo.png';




const ItemList = ({ items = [] }) => {

    return (
        <div className="container">
            <div className="row d-flex">

                {items?.map(item => <Item key={item.id} item={item} />)}

            </div>
        </div>
    )
}



export default ItemList