
import './App.css';
import NavBar  from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';


function App() {

 let numeroDeClase = 33;
 
  return (
    <>
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
        <ItemListContainer greeting={"Welcome to de Jungle"}/>
      </div>
    </>
  );
}

export default App;
