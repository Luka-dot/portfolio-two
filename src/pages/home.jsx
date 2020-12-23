import React, { useEffect } from 'react';
import gsap from 'gsap';
import Banner from '../components/banner';
import Cases from '../components/cases';
import IntroOverlay from '../components/introOverlay';

const HomePage = () => {

  useEffect(() => {
    // calculate vh in banner.scss
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
    }).to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    }).to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -.8,
      stagger: {
        amount: 0.8
      }                                                    // intro-overlay is just laying on top so it needs to be hidde.
    }).to(".intro-overlay", 0, { css: {display: "none"}})  // this is to hide intro-overlay so aplication is clickable
    .from(".case-image img", 2, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.8
      }
    })

  }, [])

    return (
        <>
            <IntroOverlay />
            <Banner />
            <Cases />
        </>
    )
};

export default HomePage;