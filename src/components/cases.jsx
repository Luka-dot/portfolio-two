import React from 'react';
import {ReactComponent as CasesNext } from '../assets/right-arrow.svg';
import {ReactComponent as CasesPrev } from '../assets/left-arrow.svg';

const caseStudies = [
    {id: 1, 
    subtitle: 'Subtitle One', 
    title: 'Title for project One',
    img: 'first'
    },
    {
        id: 2, 
        subtitle: 'Subtitle TWO', 
        title: 'Title for project TWO',
        img: 'second'
    },    
    {
        id: 3, 
        subtitle: 'Subtitle Three', 
        title: 'Title for project 3',
        img: 'third'
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
                            <div className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className="case-image" >
                                <img src={require(`../assets/${caseItem.img}.jpg`)} alt={caseItem.title} />
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
};

export default Cases;