import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import logo from '../components/images/logo.png';




const ItemDetail = ({ item }) => {

    if (item == null) {
        return (
            <Spinner className='d-flex justify-center' animation="grow" role="status">
                <span className="sr-only mx-auto"><img
                    src={logo}
                    width="150px"
                    className="d-inline-block align-top"
                    alt="logo"
                /></span>
            </Spinner>
        )
    }

    return <>

        <Card className="text-center">
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body>
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <Card.Img className='w-50' variant="top" src={item.image} alt='Image cap' />
                        <Card.Title>{item.type}</Card.Title>
                    </div>
                    <div className="col-3">
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Text className="text-muted">${item.price}</Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                    </div>
                </div>
            </Card.Body>

        </Card>

    </>





}
export default ItemDetail

