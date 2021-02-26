import React from 'react';
import { ReactComponent as RightArrow} from '../assets/right-arrow.svg';

const Banner = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Full stack software developer</span>
                        </div>
                        <div className="line">
                            <span>Raleigh NC.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">See my work <RightArrow /></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Banner;