import { useState, useEffect } from "react";
import "./models.css";

const VerificationContainer = ({handleSubmitVerification}) => {
  const [verified, setVerified] = useState(false);

  const handleVerification = () => {
    setVerified(true);
    handleSubmitVerification()
  };

  return (
    <div className="vf-container">
      <button className="proof-btn" onClick={handleVerification}>
        Verify
      </button>
      {verified ? <p className="congrats-msg">Congrats! Verification Passed :)</p> : null}
    </div>
  );
};

export default VerificationContainer;
