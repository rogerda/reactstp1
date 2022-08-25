
import './App.css';
import NavBar  from './components/Navbar';


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
        <input placeholder='Ingrese algún contenido'/>
      </div>
    </>
  );
}

export default App;
