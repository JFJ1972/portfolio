import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1> José Fernando Jiménez</h1>
        <p>Bogotá, Colombia</p>
      </div>
      <div className="footer-contact">
        <h3>Puedes encontrarme en redes sociales:</h3>
        <p>Puedes encontrarme en redes sociales:</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Diseñado por José Fernando Jiménez</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3Ba6YzcVZ3QSG0SR4Ml382LA%3D%3D"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/josefernando_jimenez/"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fab fa-instagram instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
