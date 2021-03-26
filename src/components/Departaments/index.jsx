import React from 'react';
import {getDepartaments} from '../../services/api'

function Departaments() {
  const departaments =  async() => {
    const response = await getDepartaments();
    console.log({response});
  } 
  return (
      <div>
          <button onClick={() => departaments()}>Buscar Departamentos</button>
      </div>
  );
}

export default Departaments;