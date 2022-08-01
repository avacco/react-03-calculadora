import React from "react";
import '../estilos/Pantalla.css';
// Se puede usar una funcion flecha con sintaxis de desestructurizacion en vez de una normal a traves de una constante. La flecha es el return.
const Pantalla = ({ input }) => (
  <div className="input">
    {input}
  </div>
);

export default Pantalla;