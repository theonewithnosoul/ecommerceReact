import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ItemCount from './ItemCount';


const Item = ({ buyButton, item }) => {
    return (
        <div className="col-lg-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title key={item.type}>{item.type}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                                     </Card.Text>
                    <div className="row">
                        <ItemCount />
                        <div key={item.price}>{item.price}</div>
                        <Button className="mt-3" variant="primary">{buyButton}</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}
export default Item
