import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css'
import './ReactAnimatedSlide.scss'

const ReactAnimatedSlide = () => {
  return (
        <Slider duration={1000} className="slider slider_custom" autoplay={2000}>
          {Array.from(Array(5)).map((article, index) => {
            const id = parseInt(index)+1
            return <div key={index} className="slide_content"style={{'backgroundImage':'url(https://dummyimage.com/740x300/cedceb/ebb11d.png&text='+id + ')','backgroundSize':'cover'}} >
            <div className="inner">
						<h1>title</h1>
						<p>description</p>
						<button>button</button>
					</div>
					<section>
						<span>
							Posted by <strong>user</strong>
						</span>
					</section>
          </div>
          })}
        </Slider>
  );
};

/**
 * 
 * 대략적인 애니메이션 duration 설정 및 프로퍼티의 반영이 미미 한것 같음 
 * 그리고 예도 deprecated 되는 것이 잇는데 
 * 카드 ui의 커스텀 하기는 좋은 
 * 
 */

export default ReactAnimatedSlide;