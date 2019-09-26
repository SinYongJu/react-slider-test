import React,{createRef} from 'react';
import Swiper from 'swiper'
import './swiper.min.scss'

const Slide = () => {

  let slider = createRef();

  React.useEffect(()=>{
    const mySlider = new Swiper('.swiper-container',{
      
      loop: true,
      

    })
    console.log('here')
  },[])
  
  
  return (
    <div className="swiper-container" ref={slider}>
      <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Slide;