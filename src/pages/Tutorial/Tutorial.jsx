import { useState, useEffect } from "react";
import { Sidebar, Header } from "../../components";
import links from "../../statics/links";
import markdown from "../../statics/markdowns/lib_doc";
import ReactMarkdown from "react-markdown";
import "./tutorial.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";

const Tutorial = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
                <div className="code-block-container">
                  <SyntaxHighlighter
                    className={`rounded-code-block ${className}`}
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    {...props}
                  />
                  <CopyToClipboard
                    text={String(children).replace(/\n$/, "")}
                    onCopy={handleCopy}
                  >
                    <button className="copy-button">
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </CopyToClipboard>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default Tutorial;
