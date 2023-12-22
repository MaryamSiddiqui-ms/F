import { useState, useEffect } from "react";
import "./models.css";
import axios from "axios";

const VerificationContainer = ({handleSubmitVerification}) => {
  const [verified, setVerified] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('Click on "Verify"');

  const handleVerification = async () => {
    
    const res = await axios.get("http://localhost:80/verify", {});
    if(res.data.verification_status == "PASSED"){
      setVerified(true);
      handleSubmitVerification()
      setDisplayMessage("Congratulations! Verification passed :)")
    }
    else{
      setDisplayMessage("Alert, your verification failed :(")
    }
    
  };

  return (
    <div className="vf-container">
      <button className="proof-btn" onClick={handleVerification}>
        Verify
      </button>
      <p className="congrats-msg">
        {displayMessage}  
      </p> 
    </div>
  );
};

export default VerificationContainer;
