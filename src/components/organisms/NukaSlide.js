import React from 'react';
import Slder from 'nuka-carousel'
import WireFrame from '../../page/WireFrame'

const style = {
  display : 'block',

  width : '100%',
}
const boxStyle={
  padding: '20px',
  backgroundColor:'red',
  boxSizing:'border-box'
}

const NukaSlide = () => {

  

  const slideItem = Array.from(Array(5)).map((item,idex) => {
              const idx= parseInt(idex) +1;
              if(item){
                return (<div key={"items_"+idex} style={boxStyle}>
                    <img src={"http://placehold.it/1000x400/ffffff/c0392b/&text=slide"+idx} style={style}/>
                    <button onClick={(e)=>{console.log(idx)}}>click slide {idx}</button>
                    </div>)
              }else{
                return <WireFrame key={"items_"+idx}>{"slide" +idx}</WireFrame>
              } 
  })
  // 다 맘에 드는데 업데이트 하시랍니다 
  // hooks api 업데이트가 필요하다고 합니다~
  // 먼가 무겁 
  // 다만 안에 들어가는 애들 사용하는데는 편할것 같아용~
  return (
    <Slder dragging={true}  cellAlign={"center"} slidestoshow={3} slideWidth={'300px'} wrapAround={true} cellSpacing={20}>
        {slideItem}
    </Slder>
  );
};


export default NukaSlide;