import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Data from '../stock.json'


const Item = ({ item }) => {
    return (
        <div className=" mt-5 col-lg-3">
            <Card style={{ width: '18rem' }}>
                <Link to={`/item/${item.id}`}> <Card.Img variant="top" src={item.image} /></Link>
                <Card.Body>
                    <Card.Title key={item.type}>{item.type}</Card.Title>
                    <Card.Text key={item.description}>
                        {item.description}
                     </Card.Text>
                    <div key={item.price}>{item.price}</div>
                    <div className="row">
                        <ItemCount buyButton='agregar al carrito' />
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}
export default Item
