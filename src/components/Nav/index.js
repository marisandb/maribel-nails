import React from 'react';
import {  Link } from "react-router-dom";
const Nav= () =>{
  return (
  <div>
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
  </div>
  );
}
export default Nav;