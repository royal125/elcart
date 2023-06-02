import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    const url = 'https://api.store.ellcart.com/users/logout';
    const tokenKey = 'ElcartUserToken';
    const tokenValue = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdG9yZS5lbGxjYXJ0LmNvbS91c2Vycy9sb2dpbiIsImlhdCI6MTY4NTM0NTkzNywibmJmIjoxNjg1MzQ1OTM3LCJqdGkiOiJwYUNmV3hpZnhYbllleWxWIiwic3ViIjoiMTYzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Gjicw039nxgTdDZEBIja0sLIEvXph9dGCDhT8-vQfNA';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${tokenKey} ${tokenValue}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // The user has been logged out successfully.
          localStorage.removeItem(tokenKey);
          window.location.href = '/frontend';
        } else {
          // There was an error logging out the user.
          console.log(data.error);
        }
      });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
