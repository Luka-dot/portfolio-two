import React, {useEffect} from 'react';
import gsap from 'gsap';
import {Route} from 'react-router-dom';

import './styles/App.scss';
import Header from './components/header';

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

function App() {

  useEffect(() => {
    // calculate vh in banner.scss
    let vh =window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // line below prevent "flashing" on refresh
    gsap.to("body", 0, { css: {visibility: "visible"}});
  })

  return (
    <>
      <Header /> 
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
