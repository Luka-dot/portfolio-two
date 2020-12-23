import React from 'react';
import {ReactComponent as CasesNext } from '../assets/right-arrow.svg';
import {ReactComponent as CasesPrev } from '../assets/left-arrow.svg';

const caseStudies = [
    {id: 1, 
    subtitle: 'Subtitle One', 
    title: 'Title for project One',
    img: 'first.jpg'
    },
    {
        id: 2, 
        subtitle: 'Subtitle TWO', 
        title: 'Title for project TWO',
        img: 'second.jpg'
    },    
    {
        id: 3, 
        subtitle: 'Subtitle Three', 
        title: 'Title for project 3',
        img: 'third.jpg'
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
                    <div className="case"></div>
                </div>
            </div>
        </section>
    )
};

export default Cases;