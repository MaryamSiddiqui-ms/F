import { useState, useEffect } from "react";
import {Sidebar, Header} from "../../components";
import links from "../../statics/links";
import markdown from '../../statics/markdowns/lib_doc'
import ReactMarkdown from 'react-markdown';


const Tutorial = () => {
  return (
    <div>
      <Sidebar links={links} />
      <Header />
      <div className="md-container">
          <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Tutorial;
