import React, {useState, useEffect} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import gsap from 'gsap';

import {ReactComponent as UpArrow} from '../assets/up-arrow-circle.svg';

let tl = gsap.timeline();

const Header = ({dimentions}) => {
    const [menuState, setMenuState] = useState({menuOpen: false});

    useEffect(() => {
        if(menuState.menuOpen === true) {
            gsap.to('nav', {css: {display: "block"}});
            gsap.to('body', {css: {display: "hidden"}});

            tl.to('.App', {
                duration: 1,
                y: dimentions.width <= 654 ? "70vh" : dimentions.height / 2,
                ease: "expo.inOut"
            }).to('.hamburger-menu span', {
                duration: 1.2,
                delay: -1,
                scale: 0,
                transformOrigin: "50% 0%",
                ease: "expo.inOut"
            }).to('#Path_1', {
                duration: 0.4,
                delay: -0.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 5
                }
            }).to('#Path_2', {
                duration: 0.4,
                delay: -0.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 20
                }
            }).to('#Line_1', {
                duration: 0.4,
                delay: -0.6,
                css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 18
                }
            }).to('#Circle', {
                duration: 0.4,
                delay: -0.8,
                css: {
                    strokeDashoffset: 0
                }
            }).to('.hamburger-menu-close', {
                duration: 0.4,
                delay: -0.8,
                css: {
                    display: "block"
                }
            })
        } else {
            
        }
    }, [menuState.menuOpen])

    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <a href="/">LUKAS.</a>
                    </div>
                    <div 
                        onClick={() => setMenuState({menuOpen: true})} 
                        className="nav-toggle">
                        <div className="hamburger-menu">
                            <span></span>
                            <span></span>
                        </div>
                        <div
                        onClick={() => setMenuState({menuOpen: false})} 
                            className="hamburger-menu-close">
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;