import React, { useState } from 'react';
import {getDepartaments} from '../../services/api';
import Loading from '../Loading';

function Departaments() {
  const [loading,setLoading] = useState(false) 
  const departaments =  async() => {
    setLoading(true)
    const response = await getDepartaments();
    setLoading(false)
    console.log({response});
  } 
  return (
      <div>
          <button onClick={() => departaments()}>Buscar Departamentos</button>
          <Loading loading={loading} message="Carregando Departamentos"/>
      </div>
  );
}

export default Departaments;