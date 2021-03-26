import React, { useState } from 'react';
import {getUsers} from '../../services/api';
import Loading from '../../components/Loading/index'
import {FaUserCircle} from 'react-icons/fa'
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
          
          <Loading loading={loading} message="Carregando Usuários"/>
          <div className="card-container">
              {data.map(user => {
                  return(
                      <div className="card-single" key={user.id}>
                          <div className="user-icon">
                            <FaUserCircle size={60} color="#fad586"/>
                          </div>
                          
                          <span><strong>Nome Completo: </strong>{user.first_name} {user.last_name}</span>
                          <span><strong>Email: </strong>{user.email}</span>
                          <span><strong>Gênero: </strong>{user.gender}</span>
                      </div>
                  )
              })}
          </div>
          <button onClick={() => {users()}}>Buscar Usuários</button>
      </div>
  );
}

export default Users;