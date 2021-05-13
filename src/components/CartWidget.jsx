import React from 'react';
import buyIcon from '../components/images/buy-icon.png';
import Button from 'react-bootstrap/Button';



const CartWidget = () => {
    return (
        <Button className="mr-3" href="#"><img src={buyIcon} alt="buy icon" width="23px" /></Button>
    );
}


export default CartWidget;