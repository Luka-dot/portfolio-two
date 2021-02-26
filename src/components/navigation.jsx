import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

    return (
        <nav>
        <div className='container'>
            <div className="nav-columns">
                <div className="nav-column">
                    <div className="nav-label">Menu</div>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/my-projects" exact >
                                My Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/skils" exact >
                                Skills
                            </NavLink>                         
                        </li>
                        <li>
                            <NavLink to="/services" exact >
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact >
                                Get in Touch
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav-column">
                    <div className="nav-label">Contact</div>
                    <div className="nav-infos">
                        <ul className="nav-info">
                            <li className="nav-info-label">Email</li>
                            <li>
                                <NavLink to="/contact" exact >
                                    Get in touch with us.
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/audit" exact >
                                    Audit Time?
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav-info">
                            <li className="nav-info-label">Headquoters</li>
                            <li>This will be the adress.</li>
                            <li>12345 City Name</li>
                            <li>Country</li>
                        </ul>
                        <ul className="nav-info">
                            <li className="nav-info-label">Phone</li>
                            <li>+11 123-123-1234</li>
                        </ul>
                        <ul className="nav-info">
                            <li className="nav-info-label">Legal</li>
                            <li>Privacy and cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    )
};

export default Navigation;