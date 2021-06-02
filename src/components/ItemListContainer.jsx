import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import Data from '../stock.json'





const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {

        resolve(
          Data
        )
      }, 2000)
    })

    promise.then((result) => {
      setItems(result)
    })
  })


  return (
    <div className="container">
      <ItemList items={items}></ItemList>
    </div>


  )
}
export default ItemListContainer;