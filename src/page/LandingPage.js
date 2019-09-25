import React from 'react';
import LandingTemplate from './template/LandingTemplate'
import InputTextComm from '../components/organisms/InputTextComm'
import TitleH2 from '../components/atoms/TitleH2'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import DescriptionP from '../components/atoms/DescriptionP'

const LandingPage = () => {
  const [value, actionValue ] = React.useState(true);

  const ononInputTextCommHandleChange = (e) => {
    console.log(e.target.value)
  }
  
  const onInputTextCommHandleClick = (e)=>{
    console.log('click')
    console.count('click')
  }

    return (
      <>
        <Header></Header>
        <LandingTemplate>
          <TitleH2>hello</TitleH2>
         
          <InputTextComm
            onClick={onInputTextCommHandleClick}
            onChange={ononInputTextCommHandleChange}
            InputTextCommName="input name name"
            DescriptionPChildren="in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm"
            ></InputTextComm>

          <InputTextComm
            onClick={onInputTextCommHandleClick}
            onChange={ononInputTextCommHandleChange}
            InputTextCommName="input name name"
            DescriptionPChildren="in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm in InputTextComm"
            ></InputTextComm>
          <DescriptionP>in page desc in page desc in page desc in page desc in page desc in page desc in page desc</DescriptionP>
        </LandingTemplate>
        <Footer></Footer>
      </>
    );
}

export default LandingPage;