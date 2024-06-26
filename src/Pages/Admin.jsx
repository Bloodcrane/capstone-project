import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

const Admin = () => {
  const { auth, logout } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin', {
          headers: { 'x-access-token': auth }
        });
        setData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError('You are not authorized');
        } else {
          setError('Data cannot be fetched.');
        }
      }
    };

    fetchData();
  }, [auth]);

  return (
    <div>
      <h2>Admin Page</h2>
      {data && (
        <>
          <p>{data.message}</p>
          <p>{data.secretData}</p>
        </>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Admin;