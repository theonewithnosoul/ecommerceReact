import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';


//Images
import Uno from '../components/images/stock/1.png';
import Dos from '../components/images/stock/2.png';
import Tres from '../components/images/stock/3.png';
import Cuatro from '../components/images/stock/4.png';
import Cinco from '../components/images/stock/5.png';
import Seis from '../components/images/stock/6.png';
import Siete from '../components/images/stock/7.png';
import Ocho from '../components/images/stock/8.png';



const ItemListContainer = () => {
  const [stock, setStock] = useState([])

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {

        resolve([
          {
            id: 1,
            type: 'buzo',
            stock: 5,
            price: 200,
            image: Uno
          },
          {
            id: 2,
            type: 'buzo',
            stock: 2,
            price: 1000,
            image: Dos
          },
          {
            id: 3,
            type: 'buzo',
            stock: 3,
            price: 300,
            image: Tres
          },
          {
            id: 4,
            type: 'buzo',
            stock: 3,
            price: 300,
            image: Cuatro
          },
          {
            id: 5,
            type: 'buzo',
            stock: 3,
            price: 300,
            image: Cinco
          },
          {
            id: 6,
            type: 'buzo',
            stock: 3,
            price: 300,
            image: Seis
          },
          {
            id: 7,
            type: 'buzo',
            stock: 3,
            price: 300,
            image: Siete
          },
          {
            id: 8,
            type: 'buzo',
            stock: 3,
            price: 300,
            image: Ocho
          }

        ])
      }, 2000)
    })

    promise.then((result) => {
      setStock(result)
    })
  })


  return (

    <ItemList stock={stock}></ItemList>

  )
}
export default ItemListContainer;