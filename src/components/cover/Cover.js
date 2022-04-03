import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className='cover-container'>
    <video className="video" src={coverVideo} autoPlay loop muted />
    <h1>José Fernando Jiménez</h1>
    <p>Web Develloper | Desarrollador Web</p>
    <p>Full Stack</p>
    </div>
  );
};

export default Cover;