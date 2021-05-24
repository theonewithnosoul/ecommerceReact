import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';


//Images
import Uno from '../components/images/stock/1.png';
import Dos from '../components/images/stock/2.png';
import Tres from '../components/images/stock/3.png';


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
            image: Uno
          }


        ])
      }, 2000)
    })

    promise.then((result) => {
      setStock (result)
    })
  })


  return (

    <ItemList stock={stock}></ItemList>

  )
}
export default ItemListContainer;