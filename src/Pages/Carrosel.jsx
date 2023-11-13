import React from 'react';
import './Css/Carrosel.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import img from '../Img/BannerRotativo/Falcon.png';


function Carrosel() {
  const array = [
    img
  ];

  const imageElements = array.map((element, index) => (
    <Carousel.Item >
    <img key={index} src={element} alt={`Carrosel- ${index + 1}`} className='imgCarrosel'/>
    </Carousel.Item>
  ));

  return (
    <div  className='divPrincipal'>
      <Carousel fade = "false" className='boxCarousel bsPrefix' >
       {imageElements}
      </Carousel >
    </div>
  );
}

export default Carrosel;
