import React from 'react';
import {ReactComponent as CasesNext } from '../assets/right-arrow.svg';
import {ReactComponent as CasesPrev } from '../assets/left-arrow.svg';

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
            </div>
        </section>
    )
};

export default Cases;