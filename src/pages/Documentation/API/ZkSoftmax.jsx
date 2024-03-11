import {useState, useEfect} from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from '../../../statics/markdowns/zkSoftmax.js'
import { Sidebar, Header } from '../../../components/index.js';
import links from '../../../statics/links.js';

import './md.css'

const ZkSoftmax = () => {
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

export default ZkSoftmax;