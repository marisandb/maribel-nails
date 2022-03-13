import React from 'react';
import {FaInstagram} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
import logo from '../../assets/logo/logo.png';
import { IconContext } from "react-icons";
import "./style.css"


function Header() {
  
  return (
    <header className='flex'>
      <div>
        <img src={logo} className="logo" alt="maribel cosmo logo" />
      </div>
      <div className='header-button'>
        <IconContext.Provider value={{ className: 'icons'}}>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Maribel.Cosm"><BsFacebook/></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/maribel.cosmo/"><FaInstagram/></a>
        </IconContext.Provider>
      </div>
    </header>
  );
}

export default Header;