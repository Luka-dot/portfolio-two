import React, {useEffect} from 'react';
import gsap from 'gsap';
import './styles/App.scss';
import Header from './components/header';
import Banner from './components/banner';
import Cases from './components/cases';
import IntroOverlay from './components/introOverlay';

function App() {

  // this useEffect is to calculate vh in banner.scss
  useEffect(() => {
    let vh =window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    //timeline
    const tl = gsap.timeline();

    // tl.from(".main h2", 2, {
    //   opacity: 0,
    //   y: 70
    // });

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    });

  }, [])

  return (
    <div className="App">
      <IntroOverlay />
      <Header /> 
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
