import { useState, useEffect } from "react";
import {Sidebar, Header} from "../../components";
import links from "../../statics/links";
import markdown from '../../statics/markdowns/lib_doc'
import ReactMarkdown from 'react-markdown';
	
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Tutorial = () => {
  return (
    <div>
      <Sidebar links={links} />
      <Header />
      <div className="md-container">
          {/* <ReactMarkdown>{markdown}</ReactMarkdown> */}
         <ReactMarkdown
          children={markdown}
  components={{
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  }}/>
      </div>
    </div>
  );
};

export default Tutorial;
