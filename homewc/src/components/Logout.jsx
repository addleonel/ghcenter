import React, { useState, useEffect, Fragment } from 'react';
import { backendURL, frontEndURL } from '../utils';

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace(frontEndURL+'login/');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    fetch(backendURL+ 'dj-rest-auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace(frontEndURL);
      });
  };

  return (
    <div>
      {loading === false && (
        <div className="form-container">
          <h2>¿Estás seguro de que quieres cerrar sesión?</h2>
          <input type='button' value='Cerrar sesión' onClick={handleLogout} />
        </div>
      )}
    </div>
  );
};

export default Logout;