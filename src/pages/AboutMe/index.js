import React from 'react';
import { Container } from "react-bootstrap";
import MyPic from './../../assets/images/MyPic.PNG';


const AboutMe = () => {
    return(
        <Container fluid className="p-5 bg-dark text-white">
          <article className="container d-inline-flex ">
            <div className="d-inline-flex flex-column">
              <h1 className="display-4 justify-content-start" id="Aboutme">About Me</h1>
              <p className="lead">I am a Full Stack Developer who learned thier skills at Georgia Tech's Coding Bootcamp. I am proficient in HTML, CSS, Javascript, SQL, MongoDB, Express, React, and Node. </p>
           </div>
            <img src={MyPic} className="rounded float-right w-25 h-25 justify-content-end custom-img" />
          </article>
        </Container>
    );
    }
  
  export default AboutMe;