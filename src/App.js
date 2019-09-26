import React from 'react';
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'
import LandingPage from './page/LandingPage'
import SlidePage from './page/SlidePage'

function App() {
  return (
    <>
    <Header/>
      <LandingPage></LandingPage>
      <SlidePage></SlidePage>
    <Footer/>
    </>
  );
}

export default App;
