import React from 'react';
import './styles.css';
import logo from '../../img/man.jpg';

const Item = ({product}) => {
  return (
   //<h1>{product.name}</h1>
   <div class="card">
    <img src={logo} alt="logo" />  
      <div class="container">
     <h4><b>{product.name}</b></h4>
     <p>Super Cards</p>
 
  </div>
</div>
   

  )
}

export default Item