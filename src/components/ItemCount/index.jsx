import React,{useState, useEffect} from 'react'; 
import './styles.css'

const ItemCount = () => {

    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count+1) 

    }
    useEffect(()=> {
        //EL ARRAY DEPENDECIAS VACIOS FUNCIÓN CALLBACK DE MONTA X  UNICA VEZ 
        console.log("Se montó el ItemCount");
    }, [])
        //2 efecto lo que necesitemos 
        //funcion callback de nro del useefefect se ejecute y se monte y actualice el valor count
    useEffect(()=>{
        console.log ("se actualiza el estado!")
    }, [count] );
    
  return ( 
  <div>
    <h2>{count}</h2>
    <button onClick={handleAdd}>+</button>
  </div>
  );
  
};
export default ItemCount;
