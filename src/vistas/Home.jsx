import React, { useState } from 'react'
import Boton from '../componentes/Boton'

const home = () => {
    const [contador, setCount] = useState(0);
  //let contador = 0;
  const suma = () => {
    setCount(contador + 1);
    console.log(contador);
  };

  const resta = () => {
    setCount(contador - 1);
    console.log(contador);
  };
  return (
    <div>
      <h1>Mi app en React</h1>
      <h3>Mi contador: {contador}</h3>
      <Boton onclick={suma} texto= "suma"/>
      <Boton onclick={resta} texto= "resta"/>
      <Boton texto= "mensaje"/>
      <Boton texto= "guardar"/>
    </div>
  )
}

export default home
