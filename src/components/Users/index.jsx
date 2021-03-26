import React from 'react';
import {getUsers} from '../../services/api'

// import { Container } from './styles';

function Users() {
  const users = async() => {
    const response = await getUsers();
    console.log({response})
  }
  return(
      <div>
          <button onClick={() => {users()}}>Buscar Usuários</button>
      </div>
  );
}

export default Users;