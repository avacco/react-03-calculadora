import React from "react";
import '../estilos/BotonClear.css';

// Se puede usar una funcion flecha con props a traves de una constante en vez de una funcion normal.
const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;