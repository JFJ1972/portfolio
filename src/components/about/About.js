import React from "react";
import "./About.css";
import img1 from "../../media/logopm2.png"

function About() {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Sobre mi</h3>
          <p>          
            loremipsum Copyright Microsoft Corporation. Todos los derechos
            reservadoCopyright  Microsoft Corporation. Todos los derechos
            reservadoCopyright  Microsoft Corporation. Todos los derechos
            reservado
          </p>
      </div>
        <div className="about-img">
        <img src={img1} alt=""/>
      </div>
    </div>
  );
};

export default About;
