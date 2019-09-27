import React from 'react';
import './SliderItem.scss'

const SliderItem = ({contents,thumb}) => {

  return  (<div className="swiper-slide">
            <span className="wrap_thumb">
              <img src={thumb}/>
            </span>
            <p className="desc">{contents}</p>
          </div>)
}

export default SliderItem;
