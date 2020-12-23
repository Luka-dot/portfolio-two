import React, {useEffect} from 'react';
import gsap from 'gsap';
import './styles/App.scss';
import Header from './components/header';
import Home from './pages/home';

function App() {

  useEffect(() => {
    // line below prevent "flashing" on refresh
    gsap.to("body", 0, { css: {visibility: "visible"}});
  })

  return (
    <>
      <Header /> 
      <Home />  
    </>
  );
}

export default App;
