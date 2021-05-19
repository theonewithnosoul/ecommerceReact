import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Uno from '../components/images/stock/1.png';
import ItemCount from './ItemCount';



const ItemListContainer = ({ buyButton }) => {
  return (
    <Container>
      <Row>
        <Col><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Uno} />
          <Card.Body>
            <Card.Title>Producto</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <div className="row">
              <ItemCount />
              <Button variant="primary">{buyButton}</Button>
            </div>
          </Card.Body>
        </Card></Col>
      </Row>
    </Container>
  )
}
export default ItemListContainer;