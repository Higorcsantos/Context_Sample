import React, { useState } from 'react';
import {getUsers} from '../../services/api';
import Loading from '../../components/Loading/index'

// import { Container } from './styles';

function Users() {
  const [loading,setLoading] = useState(false); 
  const users = async() => {
    setLoading(true);
    const response = await getUsers();
    setLoading(false);
    console.log({response})
  }
  return(
      <div>
          <button onClick={() => {users()}}>Buscar Usuários</button>
          <Loading loading={loading} message="Carregando Usuários"/>
      </div>
  );
}

export default Users;