import { useState, useEffect } from "react";
import "./models.css";
import axios from "axios";
import { ethers } from "ethers";

const VerificationContainer = ({ handleSubmitVerification, proof }) => {
  const [verified, setVerified] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('Click on "Verify"');
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initializeProvider = async () => {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
      }
    };

    initializeProvider();
  }, []);

  // if(proof) {
  //   console.log(proof.proof, proof.inputs)
  // }

  const handleVerification = async () => {
    const response = await axios.get("http://localhost:80/verify");
    const { abi, contract_address } = response.data;

    console.log(abi)
    console.log(contract_address)

    if (abi.abi && contract_address && proof) {
      console.log(abi.abi, contract_address);

      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contract_address, abi.abi, provider);

      const signer = provider.getSigner();
      const contractWithSigner = contract.connect(signer);
      const tx = await contractWithSigner.verifyTx(proof.proof, proof.inputs);

      const receipt = await tx.wait();

      const verificationStatus = receipt.events?.filter(
        (e) => e.event === "VerificationStatus"
      )[0]?.args?.status;

      if (verificationStatus) {
        setVerified(true);
        handleSubmitVerification();
        setDisplayMessage("Congratulations! Verification passed :)");
      } else {
        setDisplayMessage("Alert, your verification failed :(");
      }
    }
  };

  return (
    <div className="vf-container">
      <button className="proof-btn" onClick={handleVerification}>
        Verify
      </button>
      <p className="congrats-msg">{displayMessage}</p>
    </div>
  );
};

export default VerificationContainer;
