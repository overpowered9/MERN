import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="email">
        <p>customercare@sageleather.pk</p>
      </div>
      <div className="navbar">
        <img className="Logo" src="./assets/Screenshot 2024-03-19 234800.png" alt="Logo" />
        <ul className="nav_ul">
          <li>Help</li>
          <li className="login_button"><img src="./assets/user-heart-alt-svgrepo-com.svg" alt="" className="loginimage" />Login</li>
          <li className="login_button"><img src="./assets/truck-svgrepo-com.svg" alt="" className="loginimage" />Track Order</li>
          <li className="login_button"><img src="./assets/shopping-bag-svgrepo-com.svg" alt="" className="loginimage" />Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
