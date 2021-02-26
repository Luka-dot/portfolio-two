import React from 'react';
import Icon from '@mdi/react';
import { mdiGraphql, mdiLanguageJavascript, mdiLanguageTypescript, mdiNodejs, mdiLanguageHtml5, mdiLanguageCss3, mdiSass, mdiReact   } from '@mdi/js';

const About = () => {

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                <h5>Back</h5>
                    <h3>This is ABOUT page</h3>
                    <Icon path={mdiGraphql} color="pink"
                    size={1.4} />
                    <Icon path={mdiLanguageJavascript} color="yellow"
                    size={1} />
                    <Icon path={mdiLanguageTypescript} color="blue"
                    size={1} />
                    <Icon path={mdiNodejs} color="green"
                    size={1} />
                    <Icon path={mdiLanguageHtml5}
                    size={1} />
                    <Icon path={mdiLanguageCss3}
                    size={1} />
                    <Icon path={mdiSass} color="red"
                    size={1} />
                    <Icon path={mdiReact}
                    size={1} />
                </div>
            </div>
        </div>
    )
};

export default About;