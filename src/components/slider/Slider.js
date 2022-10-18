import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";
import img3 from "../../media/piano.jpg";
import img4 from "../../media/replica.png";
import img5 from "../../media/covidapp.png";
import img6 from "../../media/ecommerce.png";
import img7 from "../../media/mernStack.png";
import { Icon } from '@iconify/react';

const Slider = () => {
  return (
    <div className="proyects">
      <div className="sliderContainer">
        <Carousel variant="dark" >
          
        <Carousel.Item>
            <img className="d-block w-100" src={img7} alt="Second slide" />
            <Carousel.Caption>
              <a href="https://mern-start-client.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer">
              <h3>Mern: Individual Work/Trabajo individual. Available in/Disponible en:
              <Icon className="icon" Icon icon="cib:heroku" color="brown"/></h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

        <Carousel.Item>
            <img className="d-block w-100" src={img6} alt="Second slide" />
            <Carousel.Caption>
              <a href="https://unclientereal.000webhostapp.com"
                target="_blank"
                rel="noopener noreferrer">
              <h3>e-commerce: Individual Work/Trabajo individual. Available in/Disponible en:
              <Icon className="icon" icon="icon-park-outline:whirlwind" color="brown"/></h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="First slide" />
            <Carousel.Caption>
              <a href="https://github.com/JFJ1972/clonpiano.git"
              target="_blank"
              rel="noopener noreferrer">
              <h3>Piano: Teamwork/Trabajo en equipo. Available in/Disponible en:
              <Icon className="icon" icon="la:github-square" color="brown" />
              </h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Second slide" />
            <Carousel.Caption>
              <a href="https://jfj1972.github.io/Nuevo"
                target="_blank"
                rel="noopener noreferrer">
              <h3>Replica: Individual Work/Trabajo individual. Available in/Disponible en:
              <Icon className="icon" icon="la:github-square" color="brown"  /></h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img5} alt="Third slide" />
            <Carousel.Caption>
              <a href="https://github.com/dianachavezr/proyecto3_Covid19APIRest.git"
                target="_blank"
                rel="noopener noreferrer">
              <h3>Covid App: Teamwork/Trabajo en equipo. Available in/Disponible en:
              <Icon className="icon" icon="la:github-square" color="brown"/></h3>
              </a>



            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="proyectsText">
        <h3>Projects/Proyectos</h3>
        <p>
          I have carried out projects individually and in teams, always applying scrum and agile methodologies.
          Participate in the ¨Hackaton-F5 2022¨ as part of a team made up of students from european schools of various nationalities.
          <br/><br/>
          He realizado proyectos de forma individual y en equipo, siempre aplicando metodología scrum y agile. 
          Participe en la ¨Hackaton-F5 2022¨ como parte de un equipo integrado por estudiantes de escuelas europeas de diversas nacionalidades.
        </p>
      </div>
    </div>
  );
};

export default Slider;
