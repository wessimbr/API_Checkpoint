import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {listOfUsers.map((user) => (
        <div className="user-box">
          <ul className="user-list">
            <li><strong>Name: </strong> {user.name}</li>
            <li><strong>Username: </strong> {user.username}</li>
            <li><strong>Email: </strong>  {user.email}</li>
            <li><strong>Street:</strong>  {user.address.street}</li>
            <li><strong>suite:</strong>  {user.address.suite}</li>
            <li><strong>city:</strong>  {user.address.city}</li>
            <li><strong>zipcode:</strong>  {user.address.zipcode}</li>
            <li><strong>lat:</strong>  {user.address.geo.lat}
            <strong> lng:</strong>  {user.address.geo.lng}</li>
            <li><strong>phone:</strong>  {user.phone}</li>
            <li><strong>website:</strong>  {user.website}</li>
            <li><strong>company_name:</strong>  {user.company.name}</li>
            <li><strong>catchPhrase:</strong>  {user.company.catchPhrase}</li>
            <li><strong>company_bs:</strong>  {user.company.bs}</li>
            
          </ul>
        </div>
      ))}

    </div>
  );
};

export default UserList;
