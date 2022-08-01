import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  
  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    // Si una cadena de caracteres esta vacia es false, de lo contrario es true
    // Evita que intente calcular valores nulos y de undefined.
    try{
      if (input) {
        setInput(evaluate(input));  
      } else{
        alert("Ingresa un valor");
      }
    }catch(SyntaxError){
      alert("Valores ingresado invalido");
    }
  };

  const borrarUltimo = () => {
    setInput(input.slice(0,-1));
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}></Pantalla>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>Limpiar</BotonClear>
        <Boton manejarClic = {borrarUltimo}>CE</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
