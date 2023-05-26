import React from 'react';
import axios from 'axios';

function Logout({ history }) {
  const handleLogout = () => {
    localStorage.clear(); // Clear local storage

    // Clear cookies
    document.cookie = 'cookieName1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'cookieName2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    axios.post('http://api.ellcart.com/users/logout')
      .then(response => {
        // Handle successful logout
        console.log('Logout successful', response);
        history.push('/frontend'); // Navigate to the specified page after successful logout
      })
      .catch(error => {
        // Handle error
        console.error('Failed to logout', error);
      });
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
