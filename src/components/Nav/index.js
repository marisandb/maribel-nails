import React from 'react';
import {  Link } from "react-router-dom";
import "./style.css"
// Import Icons
import {FaInstagram} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
import { IconContext } from "react-icons";

const Nav= () =>{
  return (
  <div className=' nav'>
    <div>
    <ul className='navigation'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/policies">Policies</Link>
      </li>
    </ul>
    </div>
    <div className='header-button'>
        <IconContext.Provider value={{ className: 'icons'}}>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Maribel.Cosm"><BsFacebook/></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/maribel.cosmo/"><FaInstagram/></a>
        </IconContext.Provider>
      </div>
  </div>
  );
}
export default Nav;