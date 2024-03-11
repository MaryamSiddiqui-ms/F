import { useState, useEffect } from "react";
import {
  Sidebar,
  Header,
  VerificationContainer,
} from "../../../components";
import DTProofContainer from "../../../components/Models/DecisionTree/DTProofContainer";
import links from "../../../statics/links";
import "./models.css";

const DecisionTree = () => {
  const [isProof, setIsProof] = useState(true);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
  }, [[isProof]]);

  const handleProof = () => {
    setIsProof(false);
    setPassed(false);
  };

  const handlePassed = () => {
    setPassed(true);
  };

  return (
    <div>
      <Sidebar links={links} />
      <Header />
      <div className="model-header">
        <b>DecisionTree</b> Model - Proving the inference on a flowers classification problem using <b>Public IRIS dataset</b>
      </div>
      <div className="examples">
        <div className={passed ? "lp-filled" : "lollipop"}>
          {isProof ? 1 : 2}
        </div>
        {isProof ? (
          <DTProofContainer
            handleClick={handleProof}
            handleSubmitProof={handlePassed}
          />
        ) : (
          <VerificationContainer handleSubmitVerification={handlePassed} />
        )}
      </div>
    </div>
  );
};

export default DecisionTree;
