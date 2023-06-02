import axios from 'axios';
import { useState, useNavigate } from 'react';

export default function Changepassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    const navigate  = useNavigate();
  
    event.preventDefault();

    // Perform validation on the form data
    if (!oldPassword || !newPassword || !confirmPassword) {
      setError('Please fill out all fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }

   fetch('https://api.store.ellcart.com/users/change-password', {
      method: 'POST',
      headers: 
      { 'Content-Type': 'application/json' },
      'Authorization': 'Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdG9yZS5lbGxjYXJ0LmNvbS91c2Vycy9sb2dpbiIsImlhdCI6MTY4NTYyNzU3MCwibmJmIjoxNjg1NjI3NTcwLCJqdGkiOiJLMHlPWThDUmNNSzVIdlgzIiwic3ViIjoiMTYzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.ozYKRbgRkc9Rdp_yOyBRQ2S7dnoHciIOl0PMCQr0vy8>',
      body: JSON.stringify({ oldPassword, newPassword })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to change password');
        }
        setError('');
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        alert('Password changed successfully');
       
      })
      .catch(error => {
        setError(error.message);
      });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="old-password">Old Password:</label>
        <input
          type="password"
          id="old-password"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="new-password">New Password:</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Change Password</button>
    </form>
  );
}