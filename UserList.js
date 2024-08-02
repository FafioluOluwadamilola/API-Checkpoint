// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Set the fetched data into state
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>User List</h1>
      <div className="user-list">
        {listOfUsers.map(user => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
