import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import Data from '../stock.json'
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

  const [items, setItems] = useState([])
 
  const { itemType } = useParams();

  useEffect(() => {
    const filter = Data.filter(item => item.type === +itemType)
    const getItems = new Promise(resolve => {
      setTimeout(() => {
        resolve(
          filter[0]
        )
      }, 2000)
    })

    // getItems.then((res) => {
    //   setItems(res)
    // })

    itemType
      ? getItems.then(res => {
        setItems(res.filter(i => i.category === itemType));

      })
      : getItems.then(res => {
        setItems(res);

      });
   

  }, [itemType])


  return (
    <>
      <div className="container">
        <ItemList items={items}>

        </ItemList>
      </div>
    </>

  )
}
export default ItemListContainer;