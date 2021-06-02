import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from 'react-bootstrap/Button';
import Data from '../stock.json'


const ItemCount = ({ value = 1, stock, addOn, buyButton }) => {

    let [counter, setCounter] = useState(value);


    //HandleAdd
    // const handleAdd = () => {
    //     if (counter < Data.stock){

    //         setCounter (counter => counter + 1)
    //     }
    // }
    const handleAdd = (e) => setCounter((c) => c + 1);

    //Handle substract
    //  const handleAdd = () => {
    //     if (counter < Data.stock){

    //         setCounter (counter => counter + 1)
    //     }
    // }
    const handleSubstract = (e) => setCounter((c) => c - 1);



    return (
        <>
            <div>
                <div className="row d-flex justify-content-between p-3">
                    <div className="col-3">
                        <Button disabled={counter <= 0} variant="outline-primary" onClick={handleSubstract} ><RemoveIcon fontSize="medium" /></Button>
                    </div>

                    <div className="col-3">
                        <Button className="text-center align-center" disabled variant="outline-primary"  >{counter}</Button>
                        {/* <span className="text-center" variant="outline-primary" >{counter}</span> */}
                    </div>

                    <div className="col-3">
                        <Button disabled={counter >= stock} variant="outline-primary" onClick={handleAdd}> <AddIcon fontSize="medium" /></Button>
                    </div>
                </div>
                <div className="row">
                    <Button disabled={counter < 1} type='button' className="mt-3 " variant="primary" onClick={addOn}>{buyButton}</Button>
                </div>
            </div>
        </>
    );

}

export default ItemCount;

