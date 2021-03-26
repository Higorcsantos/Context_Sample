import React, { useState } from 'react';
import {getUsers} from '../../services/api';
import Loading from '../../components/Loading/index'
import './index.css'

// import { Container } from './styles';

function Users() {
  const [loading,setLoading] = useState(false); 
  const [data,setData] = useState([])
  const users = async() => {
    setLoading(true);
    const response = await getUsers();
    setLoading(false);
    setData(response);
  }
  return(
      <div className="container">
          <button onClick={() => {users()}}>Buscar Usuários</button>
          <Loading loading={loading} message="Carregando Usuários"/>
          <div className="card-container">
              {data.map(user => {
                  return(
                      <div className="card-single" key={user.id}>
                          <p><strong>Nome Completo: </strong>{user.first_name} {user.last_name}</p>
                          <p><strong>Email: </strong>{user.email}</p>
                          <p><strong>Gênero: </strong>{user.gender}</p>
                      </div>
                  )
              })}
          </div>
      </div>
  );
}

export default Users;