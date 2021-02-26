import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as CasesNext } from '../assets/right-arrow.svg';
import {ReactComponent as CasesPrev } from '../assets/left-arrow.svg';

const caseStudies = [
    {id: 1, 
    subtitle: 'Subtitle One', 
    title: 'My Skills',
    img: 'new-skill-key',
    link: '/skills'
    },
    {
        id: 2, 
        subtitle: 'Subtitle TWO', 
        title: 'See My Projects',
        img: 'code-fire',
        link: '/my-projects'
    },    
    {
        id: 3, 
        subtitle: 'Subtitle Three', 
        title: 'About Me',
        img: 'laptop-light',
        link: '/about'
    }
];

const Cases = () => {

    return (
        <section className="cases" >
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <CasesPrev />
                    </div>
                    <div className="cases-arrow next">
                        <CasesNext />
                    </div>
                </div>
                <div className="row">
                    {caseStudies.map((caseItem) => (
                        <div className="case" key={caseItem.id} >
                            <NavLink to={caseItem.link}> 
                                <div className="case-details">
                                    <span>{caseItem.subtitle}</span>
                                    <h2>{caseItem.title}</h2>
                                </div>
                                <div className="case-image" >
                                    <img src={require(`../assets/${caseItem.img}.jpg`)} alt={caseItem.title} />
                                </div>
                            </NavLink>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
};

export default Cases;