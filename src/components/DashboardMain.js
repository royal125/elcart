import React, { useState, useEffect } from 'react';
import './Style.css';

export default function DashboardMain() {
  const [showBanner, setShowBanner] = useState(false);

  
  
  
  
  
  
  

  const handleClick = () => {
    setShowBanner(true);
    // Set a cookie or save the user's preference in local storage
  };

  return (
    <div>
      {showBanner && (
        <div className="cookie-banner">
          <p>
            This website uses cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.
            <button className="cookie-button" onClick={handleClick}>
              Got it!
            </button>
          </p>
        </div>
      )}
      <h1>Dashboard Main</h1>
      {/* Rest of your dashboard content */}
    </div>
  );
}
