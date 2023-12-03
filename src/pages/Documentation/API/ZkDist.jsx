import {useState, useEfect} from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from '../../../statics/markdowns/zkDist.js'
import { Sidebar, Header } from '../../../components';
import links from '../../../statics/links.js';

import './md.css'

const ZkDist = () => {
    return(
        <div>
            <Sidebar links={links} />
            <Header />
            <div className="md-container">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    )
}

export default ZkDist;