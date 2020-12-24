import React, {useEffect, useState} from 'react';
import gsap from 'gsap';
import {Route} from 'react-router-dom';

import './styles/App.scss';
import Header from './components/header';
import Navigation from './components/navigation';

import About from './pages/about';
import Approach from './pages/aproach';
import CaseStudies from './pages/caseStudies';
import Services from './pages/services';
import HomePage from './pages/home';

// routes
const routes = [
  { path: "/", name: "Home", Component: HomePage },
  { path: "/case-studies", name: "CaseStudies", Component: CaseStudies },
  { path: "/about", name: "About", Component: About },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/services", name: "Services", Component: Services }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments)
    }, ms)
  }
}

function App() {
  const [dimentions, setDimentions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    // line below prevent "flashing" on refresh
    gsap.to("body", 0, { css: {visibility: "visible"}});

     // calculate vh in banner.scss
     let vh = dimentions.height * .01;
     document.documentElement.style.setProperty('--vh', `${vh}px`);

    // resizing listener
    const debounceHandleResize = debounce(function handleResize() {
      setDimentions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };

  })

  return (
    <>
      <Header dimentions={dimentions} /> 
      {dimentions.window}
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
