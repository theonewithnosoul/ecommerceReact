import React, { useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from 'react-bootstrap/Button';



const ItemCount = ({ value = 1, stock = 5 }) => {

    let [counter, setCounter] = useState(value);


    //HandleAdd
    const handleAdd = (e) => setCounter((c) => c + 1);

    //Handle substract
    const handleSubstract = (e) => setCounter((c) => c - 1);



    return (
        <>
            <div className="row justify-content-center">
                <div className="col-2">
                    <Button disabled={counter <= 0} variant="outline-primary" onClick={handleSubstract} ><RemoveIcon fontSize="small" /></Button>
                </div>

                <div className="col-2">
                    <p className="text-center" >{counter}</p>
                </div>

                <div className="col-2">
                    <Button disabled={counter >= stock} variant="outline-primary" onClick={handleAdd}> <AddIcon fontSize="small" /></Button>
                </div>
            </div>
        </>
    );

}

export default ItemCount;

