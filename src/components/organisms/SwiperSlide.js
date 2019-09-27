import React,{useEffect} from 'react';
import Swiper from 'swiper'
import cx from 'classnames';
import './swiper.min.scss'
import './SwiperSlide.scss'



const SwiperSlide = (props) => {

  let slider = React.useRef();

  useEffect(()=>{
    new Swiper('.swiper-container',{
      loop: true,
      speed: 600,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable	: true
      },
      slideActiveClass :'swiper-slide-active ACT',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    console.log(slider.current)
   
  },[])
  
  const {slideItems,containerClass} = props

 
  return (
    <div className={cx("swiper-container",containerClass)} ref={slider}>
      <div className="swiper-wrapper">
          {slideItems.map((item,index)=>{
              return item
            })
          }
      </div>
      <div className="swiper-pagination"></div>
      <button type="button" className="swiper-button-next">뒤</button>
      <button type="button" className="swiper-button-prev">앞</button>
    </div>
  );
};

export default SwiperSlide;