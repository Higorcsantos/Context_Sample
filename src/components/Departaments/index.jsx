import React, { useState } from 'react';
import {getDepartaments} from '../../services/api';
import Loading from '../Loading';
import {FaWarehouse} from 'react-icons/fa'

function Departaments() {
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);
  const departaments =  async() => {
    setLoading(true)
    const response = await getDepartaments();
    setLoading(false)
    setData(response);
  } 
  return (
      <div>
          <Loading loading={loading} message="Carregando Departamentos"/>
          <div className="card-container">
            {data.map(departament => {
              return(
                <div className="card-single">
                  <div className="user-icon">
                    <FaWarehouse size={60} color="#fad586"/>
                  </div>
                  <span><strong>Name: </strong>{departament.name}</span>
                </div>
              )
            })}
          </div>
          <button onClick={() => departaments()}>Buscar Departamentos</button>
      </div>
  );
}

export default Departaments;