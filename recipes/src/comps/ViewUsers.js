import React, { useState, useEffect } from 'react';
import { db } from '../context/Firebase'; // Adjust the path as needed
import { doc, collection, getDocs } from "firebase/firestore"; 


function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const fetchedUsers = [];
        querySnapshot.forEach((doc) => {
          fetchedUsers.push({ id: doc.id, ...doc.data() });
        });
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Username:</strong> {user.username} <strong>First Name:</strong> {user.firstName} <strong>Last Name:</strong> {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewUsers;
