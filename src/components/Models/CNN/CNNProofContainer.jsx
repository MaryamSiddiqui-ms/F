import { useState, useEffect, useRef } from "react";
import "../models.css";
import ReactMarkdown from "react-markdown";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { css } from "@emotion/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";

const CNNProofContainer = ({ handleClick, handleSubmitProof }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(-1);
  const [proofMd, setProofMd] = useState("");

  const [images, setImages] = useState([]);
  const [inputImage, setInputImage] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Step 1: Store original data

  useEffect(() => {
    axios
      .get("http://127.0.0.1:80/CNN/mnist")
      .then((res) => {
        setImages(res.data);
        setOriginalData(res.data); // Store original data
        console.log(originalData);
        // if (images.length != 0) console.log(images);
      })
      .catch((err) => console.error(err));
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get("http://127.0.0.1:80/CNN/mnist")
  //       .then((res) => {
  //         setImages(res.data);
  //         if (images.length != 0) console.log(images);
  //       })
  //       .catch((err) => console.error(err));
  //   }, []);

  const canvasRef = useRef(null);

  const flattenArray = (arr) => arr.reduce((acc, val) => acc.concat(val), []);
  const createImageDataURL = (imageData, containerWidth, containerHeight) => {
    imageData = flattenArray(imageData);
    const canvas = document.createElement("canvas");
    canvas.width = containerWidth;
    canvas.height = containerHeight;
    const ctx = canvas.getContext("2d");
    const imageDataObj = ctx.createImageData(28, 28);
    for (let i = 0; i < imageData.length; i++) {
      imageDataObj.data[i * 4] = imageData[i]; // Red
      imageDataObj.data[i * 4 + 1] = imageData[i]; // Green
      imageDataObj.data[i * 4 + 2] = imageData[i]; // Blue
      imageDataObj.data[i * 4 + 3] = 255; // Alpha
    }
    const posX = (containerWidth - 28) / 2;
    const posY = (containerHeight - 28) / 2;
    ctx.putImageData(imageDataObj, posX, posY);
    return canvas.toDataURL();
  };

  const handleCollapse = () => {
    setIsCollapse(false);
    handleClick();
  };

  const getDigit = (prediction) => {
    return prediction;
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
  const handleImageClick = (index) => {
    setInputImage(originalData[index]);
    console.log(originalData[index]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const res = await axios.post("http://localhost:80/CNN/prove", {
      // input_image: JSON.stringify(inputImage),
      input_image:inputImage

    });
 console.log(res.data);

    

    const proof = res.data.proof;

    setIsLoading(false);
    setPrediction(res.data.prediction);
    // setProofMd(convertObjectToMarkdown(proof));

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
            {/* <div className="image-grid">
              {images.map((image, index) => (
                <img
                  className="mnist-img"
                  key={index}
                  src={createImageDataURL(image, 100, 100)}
                  alt={`Image ${index}`}
                  onClick={() => {
                    setInputImage(image);
                    // Handle click event here
                  }}
                />
              ))}
            </div> */}
            {images.map((image, index) => (
              <img
                className="mnist-img"
                key={index}
                src={createImageDataURL(image, 100, 100)}
                alt={`Image ${index}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
            <button type="submit" className="proof-btn" onClick={handleSubmit}>
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
            <div className="prediction-container">
              Digit <br />
              {/* {prediction != -1 ? prediction : null} */}
              {prediction != -1 ? getDigit(prediction) : "Not yet predicted"}
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

export default CNNProofContainer;
