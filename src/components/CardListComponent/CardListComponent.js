import React, { useState, useEffect } from 'react';
import UserComponent from '../UserComponent/UserComponent';
import './CardListComponent.css';

const CardListComponent = () => {
  // Creamos nuestro state
  const [users, setUsers] = useState([]);

  console.log(users);

  //useEffect(callback, [])

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className='Cards-List'>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <UserComponent data={user} key={user.id} />
          </div>
        );
      })}
    </div>
  );
};

export default CardListComponent;
