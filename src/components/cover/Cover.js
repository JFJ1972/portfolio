import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className='cover-container'>
    <video className="video" src={coverVideo} autoPlay loop muted />
    <h1>José Fernando Jiménez</h1>
    <p>Desarrollador Junior | Administrador De Empresas</p>
    </div>
  );
};

export default Cover;