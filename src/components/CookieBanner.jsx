import React, { useState } from "react";
import './Style.css'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleClick = () => {
    setShowBanner(false);
    // You canalso set a cookie here to remember the user's preference
  };

  if (!showBanner) {
    return null; // Don't render the banner if it's not supposed to be shown
  }

  return (
    <div className="cookie-banner">
      
      <p className="cookie-message">
        This website uses cookies to improve your experience. By clicking
        "Accept", you consent to the use of cookies.
      </p>
      <button onClick={handleClick} className="cookie-accept-button">Accept</button>
    </div>
  );
};

export default CookieBanner;