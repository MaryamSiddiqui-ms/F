import {useState, useEffect} from 'react';
import { MdCardHolder, Sidebar, Header } from '../../components';
import docs from '../../statics/docs';
import links from '../../statics/links';
import './documentation.css'

const Documentation = () => {
    return (
        <div>
            <Sidebar links={links} />
            <Header />
            <div className="card-container">
                <MdCardHolder docs={docs} />
            </div>
        </div>
    )
}

export default Documentation;