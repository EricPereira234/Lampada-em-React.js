import React, { useState } from 'react';
import './App.css';
import Area from './coponentes/Area';

function App() {

  const [liga, Setliga]= useState(false);
  return (
    <>
    <Area
       
       liga={liga} Setliga={Setliga}
    
    />
    </>
  );
}

export default App;
