import React from 'react';
import './styles.css'

//import logo from '../../img/man.jpg';

const Item = ({product}) => {
  return (
   //<h1>{product.name}</h1>

     <div class="card">
    <img src={product.image} width= {200} alt="logo"  />  
      <div class="container">
     <h4><b>{product.title}</b></h4>
     <p>{product.description}</p>
     <h3><b>${product.price }</b></h3>
   </div>
</div>

  
  )
}

export default Item