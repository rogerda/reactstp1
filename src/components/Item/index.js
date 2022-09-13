import React from 'react';
import './styles.css'

//import logo from '../../img/man.jpg';

const Item = ({product}) => {
  return (
   //<h1>{product.name}</h1>
     /*<div class="card">
      <img src={product.image} width= {200} alt="logo"  />  
       <div class="container">
        <h4><b>{product.title}</b></h4>
          <p>{product.description}</p>
      <h3><b>${product.price }</b></h3>
      </div>
    </div>*/
//--------------------
<div class="card">
  <img class="card-img-top" src={product.image} width= {250}  alt="Ver"/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">${product.description}</p>
    <h3><b>${product.price }</b></h3>
    <a class="btn btn-primary">Comprar</a>
  </div>
</div>
  )
}

export default Item