import { useState, useEffect } from "react";
import "./models.css";
import ReactMarkdown from 'react-markdown';
import proofMd from './proof';

const ProofContainer = ({ handleClick, handleSubmitProof }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [prediction, setPrediction] = useState(-1);
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

  console.log(isCollapse);

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSubmitProof();
    setPrediction(1);
  };

  return (
    <div className="proof-container">
      {isCollapse ? (
        <>
          <h3 className="pub-input-title">Public Inputs</h3>
          <form onSubmit={handleSubmit}>
            <div className="public-inputs">
              <input
                name="pub-x"
                className="pub-input"
                type="number"
                placeholder="Value X"
                value={x1}
                onChange={handleX1Change}
              />
              <input
                name="pub-y"
                className="pub-input"
                type="number"
                placeholder="Value Y"
                value={x2}
                onChange={handleX2Change}
              />
            </div>
            <button type="submit" className="proof-btn">
              Generate Proof
            </button>
          </form>

          <div className="prediction-container">
            Prediction: {prediction != -1 ? prediction : null}
          </div>

          <i
            class="fa-solid fa-arrow-right next-step-btn"
            onClick={handleCollapse}
          ></i>
        </>
      ) : null}

      {
        prediction != -1 ?
        <div className="proof-md-wrapper">
            <h2>Proof</h2>
            <ReactMarkdown>{proofMd}</ReactMarkdown>  
        </div> : 
        null
      }
    </div>
  );
};

export default ProofContainer;
