import React from "react";
import "./Footer.css";
import emailjs from "@emailjs/browser";

//const Footer = () => {
export const Footer = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_qby8lia",
        "template_qeorxlr",
        event.target,
        "HTFvVy3xF0EPHXk_T"
      )
      .then((response) => console.log(response)).
      catch((error) => console.log(error));
  };

  return (
    <div className="footer-container">
      <footer className="footer">
      <div className="design-by">Desing by / Diseñado por :</div>
        <div className="footer-info">
          <h1> José Fernando Jiménez R.</h1>
          <p>Bogotá, Colombia</p>
        </div>
        <div className="footer-contact">
          <h3>Social Media / Redes Sociales :</h3>

        </div>
        <div className="footer-sns">
          
          <div className="sns-links">
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3Ba6YzcVZ3QSG0SR4Ml382LA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/josefernando_jimenez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram instagram"></i>
            </a>
          </div>
        </div>
      </footer>

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

//export default Footer;
