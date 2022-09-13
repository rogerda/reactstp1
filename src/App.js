
import './App.css';
import NavBar  from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

 let numeroDeClase = 33;
 
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="App">
        {/* Estilos en línea */}
        <p style={
          {
            color: 'blue',
            paddingTop: '40px', 
          }
        }>
          Bienvenidos a la clase {numeroDeClase}!
        </p>
        <hr/>
       
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          {/* <Route path="/detail/:productId" element={<ItemDetailContainer/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
