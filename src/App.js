import React, {useState, useEffect} from 'react';
import './App.css';
import About from './components/about/About';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import {Info} from './components/info/Info.js';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';


function App() {
//hook para que inice el scroll en 0 aqui no funciona.   
const [scrollHeigth, setScrollHeigth]= useState(0);

// esta funcion controla la poscion del scroll

const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollHeigth(position);

};

useEffect(() =>{
  window.addEventListener("scroll", handleScroll);
//cuando el parametro scrollheigth cambia se ejecuta usseffect y se actualiza el valor con la posicion del scroll
}, [scrollHeigth])


  return (
    <div className="App">
      <Navbar isScrolling={scrollHeigth}/>
      <Cover />
      <About /> 
      <Slider />
      <Info />
      <Footer />
      </div>
  );
}

export default App;
