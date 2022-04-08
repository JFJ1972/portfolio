import React from "react";
import "./Info.css";
import { Icon } from '@iconify/react';


const Info = () => {
  
  return (
    <div className="info-container">
      <div className="curriculum">
        <div className="resume">
          <h1>Professional Resume</h1>
          <p>
            Web developer passionate about new challenges, with knowledge in
            front-end and back-end, oriented to the achievement of objectives, extensive
            experience in internal and external customer service as well as in
            the implementation and execution of the agile methodology. Interested in
            Being part of teams dedicated to software development that
            allow you to grow professionally.
            <br />
            25-year track record in human resource management,
            budgets, commercial objectives and in attention to the public in
            financial establishments. Experience of more than 2 years in
            staff training in the classroom and through the supervision of
            labor practices.
            <br />
            
          </p>
        </div>
        <div className="topics">
          <div className="education">
            <h4>Education</h4>
            Degree: Web Developer Full Stack
            <p>Completed May 2022</p>
            <br/>
            Degree: Business Administrator
            <br/>
            Completed September 2001
          </div><br/>
          <div className="habilities">
            <h4>Skills</h4>
            <p className="sk"> HTML <Icon icon="ant-design:html5-outlined" color="#ba3329" />
            CSS<Icon icon="ion:logo-css3" color="#ba3329" />
            <br />
            JavaScript<Icon icon="vscode-icons:file-type-js-official" color="#ba3329" />
            React<Icon icon="teenyicons:react-solid" color="#ba3329" />
            <br />
            Node<Icon icon="akar-icons:node-fill" color="#ba3329" />
            Php<Icon icon="akar-icons:php-fill" color="#ba3329" />
            <br />
            MongoDb<Icon icon="bxl:mongodb" color="#ba3329" />
            </p>
          </div>
          <br/>
          <div className="languajes">
            <h4>Languajes</h4>
            Native Spanish
            <br />
            English Level B2
          </div>
        </div>
        <br/><br/>
        <br/><br/>
        </div>
      
        <div className="curriculumb">
        <div className="resume">
          <h1>Resumen Profesional</h1>
          <p>
            Desarrollador web apasionado por nuevos retos, con conocimientos en
            front-end y back-end, orientado al logro de objetivos, amplia
            experiencia en atención al cliente interno y externo al igual que en
            la implementación y ejecución de la metodología agile. Interesado en
            hacer parte de equipos dedicados al desarrollo de software que me
            permitan crecer profesionalmente.
            <br />
            Trayectoria de 25 años en el manejo de recursos humanos,
            presupuestos, objetivos comerciales y en atención al público en
            establecimientos financieros. Experiencia de más de 2 años en
            capacitación de personal en aula y mediante la supervisión de
            prácticas laborales.
            <br />
          
          </p>
        </div>

        <div className="topics">
          <div className="education">
            <h4>Educación</h4>
            Titulo: Desarrollador Web Full Stack <br />
            Completado Mayo 2022
            <br />
            <br />
            Titulo: Administrador
            <br />
            Completado Septiembre 2001
          </div><br/>
          <div className="habilities">
            <h4>Habilidades</h4>
            <p className="sk"> HTML <Icon icon="ant-design:html5-outlined" color="#ba3329" />
            CSS<Icon icon="ion:logo-css3" color="#ba3329" />
            <br />
            JavaScript<Icon icon="vscode-icons:file-type-js-official" color="#ba3329" />
            React<Icon icon="teenyicons:react-solid" color="#ba3329" />
            <br />
            Node<Icon icon="akar-icons:node-fill" color="#ba3329" />
            Php<Icon icon="akar-icons:php-fill" color="#ba3329" />
            <br />
            MongoDb<Icon icon="bxl:mongodb" color="#ba3329" />
            </p>
          </div>
          <br/>
          <div className="languajes">
            <h4>Idiomas</h4>
            Español Nativo
            <br />
            Ingles Nivel B2
          </div>
        </div>
       <br/><br/>        
      </div>

    </div>
  );
};

export default Info;