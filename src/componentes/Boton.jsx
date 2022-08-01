import React from 'react';
import '../estilos/Boton.css';

const esOperador = valor => {
  // Si valor no es un numero, no es un punto y no es un "=", retorna true.
  return isNaN(valor) && (valor !== '.') && (valor !== '=');
};

function Boton(props) {
  return (
    // Hace una comparacion, si la propiedad esOperador de props.children es true, asigna la clase operador, de lo contrario deja la clase vacia, cortando cualquier espacio en blanco
    // Al hacer clic en el boton, envia como argumento el valor de props.children, llamando una funcion anonima que se crea en el momento del clic
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
         onClick={() => props.manejarClic(props.children)}
    >
      {props.children}        
    </div>
  )
};

export default Boton;