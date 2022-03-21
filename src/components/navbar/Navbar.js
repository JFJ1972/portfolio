import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {//se trae por desestructuracion de appjs para no hacer props
  
    const toTheTop = () => { // esta funcion nos recgresa al inicio click en logo
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        Jose F. Jimenez
      </div>
    </nav>
  );
};

export default Navbar;
