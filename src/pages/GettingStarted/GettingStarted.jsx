import { useState, useEffect } from "react";
import { Sidebar, Header } from "../../components";
import links from "../../statics/links";
import gif from "../../assets/in_progress.gif";
import "./getting-started.css";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const GettingStarted = () => {
  return (
    <div>
      <Sidebar links={links} />
      <Header />
      <div className="main">
        <ol className="inst-list-wrapper">
          <li>
            <p className="inst-heading">1. Install Zokrates</p>
            <p>
              You can download Zokrates by following the instructions provided
              in their{" "}
              <a
                className="zok-doc-link"
                target="blank"
                href="https://zokrates.github.io/gettingstarted.html"
              >
                documentation.
              </a>
            </p>
          </li>
          <li>
            <p className="inst-heading">2. Download Source Code</p>
            <p>
              In order to install zkVML, you first need to download it from{" "}
              <a
                className="zok-doc-link"
                target="blank"
                href="https://github.com/MaryamSiddiqui-ms/FYP-ZKP"
              >
                source code
              </a>
            </p>
          </li>
          <li>
            <p className="inst-heading">3. Download Dependencies</p>
            <p>To run this library, you should have python >= 3.9.</p>
            <p>
              To download all the required packages, navigate to the directory
              containing zkVML and run:
            </p>
            <p className="code-block">
              pip install -r requirements.txt
            </p>
          </li>
        </ol>
        <p className="inst-ending-txt">
          Following the above steps, you can now use zkVML. Enjoy!
        </p>
      </div>
    </div>
  );
};

export default GettingStarted;
