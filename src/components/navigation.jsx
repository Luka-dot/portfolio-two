import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

    return (
        <nav>
            <div className="nav-columns">
                <div className="nav-column">
                    <div className="nav-links">Menu</div>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/case-studies" exact >
                                Case Studies
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/approach" exact >
                                Aproach
                            </NavLink>
                            
                        </li>
                        <li>
                            <NavLink to="/services" exact >
                                Services
                            </NavLink>
                            
                        </li>
                        <li>
                            <NavLink to="/about" exact >
                                About us
                            </NavLink>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;