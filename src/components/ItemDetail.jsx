import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({ item }) => {
    return item?.map((items) => {

        
            <>

                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" src={items.image} alt='Image cap' />
                        <Card.Title>{items.type}</Card.Title>
                        <Card.Text>
                            {items.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">${items.price}</Card.Footer>
                </Card>

            </>
      
    })


}
export default ItemDetail

