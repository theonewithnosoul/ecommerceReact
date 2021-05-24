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
            <div className="row d-flex justify-content-between p-3">
                <div className="col-2">
                    <Button disabled={counter <= 0} variant="outline-primary" onClick={handleSubstract} ><RemoveIcon fontSize="medium" /></Button>
                </div>

                <div className="col-2">
                 <Button className="text-center align-center" disabled variant="outline-primary"  >{counter}</Button>
                    {/* <span className="text-center" variant="outline-primary" >{counter}</span> */}
                </div>

                <div className="col-2">
                    <Button disabled={counter >= stock} variant="outline-primary" onClick={handleAdd}> <AddIcon fontSize="medium" /></Button>
                </div>
            </div>
        </>
    );

}

export default ItemCount;

