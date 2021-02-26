import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Banner from '../components/banner';
import Cases from '../components/cases';
import IntroOverlay from '../components/introOverlay';

const tl = gsap.timeline();

const homePageAnimation = (completeAnimation) => {
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
        },
        onComplete: completeAnimation
    })
}

const HomePage = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    const completeAnimation = () => {
        setAnimationComplete(true);
    };

  useEffect(() => {
    // gsap on complete
  //  homePageAnimation(completeAnimation);
  setAnimationComplete(true)     // to avoid animation in development
  }, [])

    return (
        <>  
            {animationComplete === false ? <IntroOverlay /> : "" }
            <Banner />
            <Cases />
        </>
    )
};

export default HomePage;