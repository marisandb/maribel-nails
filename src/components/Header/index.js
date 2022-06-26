import React from 'react';
import logo from '../../assets/logo/logo.png';
import "./style.css"

function Header() {
  
  return (
    <header className=''>
      <div className='logo'>
        <img src={logo} className="" alt="maribel cosmo logo" />
      </div>
    </header>
  );
}

export default Header;