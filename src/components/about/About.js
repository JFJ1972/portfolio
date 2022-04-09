import React from "react";
import "./About.css";
import img1 from "../../media/logopm2.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-desc">
        <p>
          I´m a business administrator and since 2021 i´m training to be a Web developer.  
          <br/>
          <br/>
          Soy administrador de empresas y desde 2021 estoy entrenándome para ser
          desarrollador Web.
        </p>
      </div>
      <div className="about-img" data-aos="zoom-in" data-aos-duration="3000">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default About;
