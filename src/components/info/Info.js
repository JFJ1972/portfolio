import React from "react";
import "./Info.css";
import emailjs from "@emailjs/browser";

export const Info = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_qby8lia",
        "template_qeorxlr",
        event.target,
        "HTFvVy3xF0EPHXk_T"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div className="info-container">
      <div className="curriculum">
        <div className="resume">
          <h1>Professional Resume</h1>
          <p>
            Web developer passionate about new challenges, with knowledge in
            front-end and back-end, oriented to the achievement of objectives, with extensive
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
            Degree: Web Develloper Full Stack
            <br/>
            Completed May 2022
            <br/>
            <br/>
            Degree: Business Administrator
            <br />
            Completed September 2001
          </div>
          <div className="habilities">
            <h4>Skills</h4>
            HTML
            CSS
            <br />
            JavaScrpt
            React
            <br />
            Node
            Php
            <br />
            MongoDb
          </div>

          <div className="languajes">
            <h4>Languajes</h4>
            Native Spanish
            <br />
            English Level B2
          </div>
        </div>
        <br/><br/>
        <br/><br/>
        <div className="resume">
          <h1>Resumen Profesional</h1>
          <p>
            Desarrollador web apasionado por nuevos retos, con conocimentos en
            front-end y back-end, orientado al logro de objetivos, con amplia
            experiencia en atencion al cliente interno y externo al igual que en
            la implementacion y ejecucion de la metodologia agile. Interesado en
            hacer parte de equipos dedicados al desarrollo de software que me
            permitan crecer profesionalmente.
            <br />
            Trayectoria de 25 años en el manejo de recursos humanos,
            presupuestos, objetivos comerciales y en atencion al publico en
            establecimientos financieros. Experiencia de mas de 2 años en
            capacitacion de personal en aula y mediante la supervision de
            practicas laborales.
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
          </div>
          <div className="habilities">
            <h4>Habilidades</h4>
            HTML
            CSS
            <br />
            JavaScrpt
            React
            <br />
            Node
            Php
            <br />
            MongoDb
          </div>

          <div className="languajes">
            <h4>Idiomas</h4>
            Español Nativo
            <br />
            Ingles Nivel B2
          </div>
        </div>
       <br/><br/>        
      </div>

      <div className="div-form">
        <h2 className="title-form">Contact/Contacto</h2>
        <form className="form-mail" onSubmit={sendEmail}>
          <label>Name/Nombre</label>
          <input type="text" name="user_name" />
          <hr />
          <label>Email</label>
          <input type="email" name="user_email" />
          <hr />
          <label>Message/Mensaje</label>
          <textarea name="user_message" id="" cols="30" rows="10"></textarea>
          <hr />
          <button>Send/Enviar</button>
        </form>
      </div>
    </div>
  );
};
