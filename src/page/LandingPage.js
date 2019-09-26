import React from 'react';
import LandingTemplate from './template/LandingTemplate'
import LandingTemplate2 from './template/LandingTemplate2'
import InputTextComm from '../components/organisms/InputTextComm'
import TitleH2 from '../components/atoms/TitleH2'
import DescriptionP from '../components/atoms/DescriptionP'
import './LandingPage.scss'

const LandingPage = () => {

  const ononInputTextCommHandleChange = (e) => {
    console.log(e.target.value)
  }
  const onInputTextCommHandleClick = (e)=>{
    console.log('click')
    console.count('click')
  }
  
  return (
      <LandingTemplate 
        // tmplHeader = {<TitleH2>LandingTemplate</TitleH2>}
        // tmplBody = {  <>
        // <InputTextComm
        //   onClick={onInputTextCommHandleClick}
        //   onChange={ononInputTextCommHandleChange}
        //   InputTextCommName="input name name"
        //   DescriptionPChildren="in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm"
        //   ></InputTextComm>
        //    <DescriptionP>in page desc in page desc in page desc in page desc in page desc in page desc in page desc</DescriptionP> 
        // </> 
        // }
        // tmplFooter ={
        //   <DescriptionP>in page desc in page desc in page desc in page desc in page desc in page desc in page desc</DescriptionP> 
        // }
      />
    )
}

export default LandingPage;