import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Data from '../stock.json'





const Categories = () => {
    const [items, setItems] = useState([]);

    const {itemType} = useParams ();


    useEffect ( () => {
       const getItems = new Promise (resolve =>{
           setTimeout(() =>{
               resolve (Data);
           }, 1000);
       })


      itemType
       ? getItems.then(res => {
           setItems(res.filter(i => i.category === itemType));
        
         })
       : getItems.then(res => {
           setItems(res);
           
         });

    }, [itemType])
    
    const filtro = items.filter ((product) => {
        
        return product.data.itemType === itemType;
    })
    

    return (
        <>
        <ItemListContainer>
        {
            filtro.length ?
            filtro.map ((item) => {
                return (<Item key={item.id}
                producto ={item.type}
                id = {item.id}>
                </Item>)
            })
            :
            <div className="contenedorCategorias">Cargando...</div>
        }
      
        </ItemListContainer>
        </>
    )
}

export default Categories;