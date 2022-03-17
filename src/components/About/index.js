import React from 'react';
import Maribel from '../../assets/about/selfie.jpg';
import "./style.css"


const About = () =>{
  return (
    <div class="about">
    <h2>About Me</h2>
    <img src={Maribel} alt="selfie of Maribel"/>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis repellendus nihil sint saepe nulla exercitationem, quaerat natus atque, ipsum facere. Deserunt sit provident voluptas libero, debitis numquam officiis distinctio!  
    </p>
  </div>
  
  );
}
export default About;