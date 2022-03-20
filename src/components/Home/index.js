import React from 'react';
import "./style.css"

const Home = () =>{
  return (
    <div>
      <div className='services flex-row'>
        <div className='services-title'>
        <h2> Services</h2>
        </div>
        <div className='services-list'>
        <ul>
          <li> Long Length Acrylics - Starting at $35
            <br />
            1 1/2 cm or longer
          </li>
          <li> Medium Length Acrylics - Starting at $30
            <br />
            7/8 cm or longer
          </li>
          <li> Short Length Acrylics - Starting at $25
            <br />
            1/2 cm or longer
          </li>
          <li> Super Short Length Acrylics - Starting at $20
            <br />
            Shorter than 1/2 cm
          </li>
          <li>
            Fills - Starting at 15$
          </li>
          <li>
            Gels Only - Starting at $10
          </li>
        </ul>
        </div>
       
      </div>
    </div>
  );
}
export default Home;