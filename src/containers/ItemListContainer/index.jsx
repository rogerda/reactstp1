import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../../components/ItemList';
//import ItemCount from '../../components/ItemCount';
//import { products } from '../../data/products';
import './styles.css';

const ItemListContainer = ({greeting}) => {
// hook useState array en 0
    const [productos,setProductos] = useState([])
//la promise se ejecuta x unica vechi
    useEffect (()=>{
        ( async ()=> {
            /*const obtenerProductos = new Promise ((accept, reject) => { 
                setTimeout (()=> {
                    accept(products)
                }, 3000); 
                //pasa 3 segundo y se renderiza
            })*/
            //promesa
            try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productos = await response.json();
        //console.log(response);
        setProductos(productos);
    } catch (error) {
        console.log(error);
        }
        })()
    }, [productos])


    console.log(productos);
return (

<div className='item-list-container'>
    <ItemList products={productos}/>

</div>

)

}
export default ItemListContainer;