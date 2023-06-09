import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('The button was clicked.');
    console.log('ANTES de borrar', sessionStorage.getItem('id'));
    // Clear authentication token or user session
    sessionStorage.removeItem('id');
    console.log('DESPUES de borrar', sessionStorage.getItem('id'));

    // Clear user-related data
    // setState(null); // or context.clearUser();

    // Redirect to login page
    navigate('/login', { replace: true });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;