import React, { useState } from "react";
import axios from "axios";
import "./prompt.css";
import { Sidebar, Header } from "../../components";
import links from "../../statics/links";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy, dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Prompt = () => {
  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:80/prompt-generation", {
      inputCode: inputCode,
    });
    console.log(res?.data.response);
    if (res.data.response) {
      setCode(res.data.response);
    }
  };

  const handleOnChange = (e) => {
    setInputCode(e.target.value);
  };

  return (
    <>
      <div>
        <Sidebar links={links} />
        <Header />
        <div className="main-prompt">
          <h1 className="prompt-heading">Make your Model Secure</h1>
          <div className="prompt-code-wrapper">
            <form onSubmit={handleSubmit} className="prompt-form">
              <label className="prompt-label" htmlFor="code-form">
                Native Code
              </label>
              <br />
              <textarea
                className="prompt-textarea"
                name="code-form"
                id="code-form"
                cols="64"
                rows="16"
                value={inputCode}
                placeholder="Enter your Code here..."
                onChange={handleOnChange}
              />
              <br />
              <button type="submit">Submit</button>
            </form>
            <div className="response-code-wrapper">
              <p className="response-code-header">Generated Code</p>
              {
                !code && 
                <div>Please wait a few seconds after clicking on "Submit"</div>
              }
              {code && (
                <div
                  className="response-code-container"
                  style={{ maxHeight: "324px", overflowY: "auto" }}
                >
                  <SyntaxHighlighter language="python" style={dracula}>
                    {code}
                  </SyntaxHighlighter>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prompt;
