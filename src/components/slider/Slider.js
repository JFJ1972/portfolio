import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";
import img3 from "../../media/logopm2.png";
import img4 from "../../media/logopm.png";
import img5 from "../../media/marcapersonal2.jpg";

const Slider = () => {
  return (
    <div className="proyects">
      <div className="proyectsText">
        <h3>Proyectos</h3>
        <p>
          He realizado proyectos de forma individual y en equipo, simepre aplicando metodologia scrum y agile. 
          <br/><br/>
          Participe en la Hackaton-F5 2022 como parte de un equipo integrado por estudiantes de escuelas europeas de diversas nacionalidades.
        </p>
      </div>

      <div className="sliderContainer">
        <Carousel variant="dark" >
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="First slide" />
            <Carousel.Caption>
              <h3>Replica Web</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Second slide" />
            <Carousel.Caption>
              <h3>Covid-19</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img5} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
