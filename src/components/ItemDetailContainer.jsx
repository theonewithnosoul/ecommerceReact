import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = (id) => {
    const [item, setItem] = useState(null)

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: '1',
                    price: 250,
                    title: 'Buzo oversize',
                    description: 'Buzo de algodón oversize' + id,
                    image: ''
                })
            }, 2000)
        })

        getItems.then((result) =>{
            setItem(result)
        })
    })



    return(
        <ItemDetail item={item}></ItemDetail>
    )
}

export default ItemDetailContainer