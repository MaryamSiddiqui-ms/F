import { useState, useEffect } from "react";
import "./models.css";
import ReactMarkdown from "react-markdown";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { css } from '@emotion/react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";

const ProofContainer = ({ handleClick, handleSubmitProof }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(-1);
  const [proofMd, setProofMd] = useState("");
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  const handleX1Change = (event) => {
    setX1(event.target.value);
  };
  const handleX2Change = (event) => {
    setX2(event.target.value);
  };

  const handleCollapse = () => {
    setIsCollapse(false);
    handleClick();
  };

  function convertObjectToMarkdown(obj) {
    let inputs = "";
    for (let i = 0; i < obj.inputs.length; i++) {
      inputs += '\t\t"' + obj.inputs[i] + '",\n';
    }
    inputs = inputs.slice(0, -2);

    let p_a = "";
    for (let i = 0; i < obj.proof.a.length; i++) {
      p_a += '\t\t"' + obj.proof.a[i] + '",\n';
    }
    p_a = p_a.slice(0, -2);

    let p_b = "";
    for (let i = 0; i < obj.proof.b.length; i++) {
      p_b += '\t\t"' + obj.proof.b[i] + '",\n';
    }
    p_b = p_b.slice(0, -2);

    let p_c = "";
    for (let i = 0; i < obj.proof.c.length; i++) {
      p_c += '\t\t"' + obj.proof.c[i] + '",\n';
    }
    p_c = p_c.slice(0, -2);

    const proof = `{
      "scheme": ${obj.scheme},
      "curve": ${obj.curve},
      "proof": {
        "a": [\n${p_a}],
        "b": [\n${p_b}],
        "c": [\n${p_c}],
      },
      "inputs": [\n${inputs}]
    }`;

    return proof;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await axios.post("http://localhost:80", {
      dx: x1,
      dy: x2,
    });

    const proof = res.data.proof;

    setIsLoading(false);
    setPrediction(res.data.prediction);
    setProofMd(convertObjectToMarkdown(proof));

    handleSubmitProof();
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };


  return (
    <>
      <div className="proof-container">
        {isCollapse ? (
          <>
            <h3 className="pub-input-title">Public Inputs</h3>
            <form onSubmit={handleSubmit}>
              <div className="public-inputs">
                <div>
                  <label for="pub-x" className="label label-txt">
                    BMI
                  </label>
                  <input
                    id="pub-x"
                    name="pub-x"
                    className="pub-input"
                    type="number"
                    placeholder="Value X"
                    value={x1}
                    onChange={handleX1Change}
                    step="0.1"
                  />
                </div>
                <div>
                  <label for="pub-x" className="label label-txt">
                    Age
                  </label>
                  <input
                    name="pub-y"
                    className="pub-input"
                    type="number"
                    placeholder="Value Y"
                    value={x2}
                    onChange={handleX2Change}
                  />
                </div>
              </div>
              <button type="submit" className="proof-btn">
                {isLoading ? (
                  <ClipLoader
                    color={"#ffffff"}
                    loading={isLoading}
                    css={override}
                    size={15}
                  />
                ) : (
                  "Generate Proof"
                )}
              </button>
              {isLoading && <span>This might take a while...</span>}
            </form>

            <div className="prediction-container">
              Outcome( Diabetes: Yes/ No ):{" "}
              {prediction != -1 ? prediction : null}
              <div className="next-btn-wrapper">
                <i
                className="fa-solid fa-arrow-right next-step-btn"
                onClick={handleCollapse}
              ></i>
              </div>
            </div>
{/* 
            <i
              className="fa-solid fa-arrow-right next-step-btn"
              onClick={handleCollapse}
            ></i> */}
          </>
        ) : null}

        {prediction != -1 ? (
          <div className="proof-md-wrapper">
            <h2>Proof</h2>
            <ReactMarkdown
              children={`\`\`\`json\n${proofMd}\n\`\`\``}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <div className="code-block-container-pc">
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
                        <button className="copy-button-pc">
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
        ) : null}
      </div>
    </>
  );
};

export default ProofContainer;
