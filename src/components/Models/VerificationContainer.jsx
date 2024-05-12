import { useState, useEffect } from "react";
import "./models.css";
import axios from "axios";
import { ethers } from "ethers";

const VerificationContainer = ({ handleSubmitVerification, proof, model }) => {
  const [verified, setVerified] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('Click on "Verify"');
  const [provider, setProvider] = useState(null);
  const [executionTime, setExecutiontime] = useState(0);

  // useEffect(() => {
  //   const initializeProvider = async () => {
  //     if (window.ethereum) {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       setProvider(provider);
  //     }
  //   };

  //   initializeProvider();
  // }, []);

  const handleVerification = async () => {
    let modelApi = "";
    if (model === "knn") {
      modelApi = "zkMaxLabel";
    } else if (model === "decisiontree") {
      modelApi = "zkArgmax";
    }

    const response = await axios.get(
      `http://localhost:80/verify?proof_path=${modelApi}`
    );
    const { abi, contract_address } = response.data;

    if (abi.abi && contract_address && proof) {
      console.log(abi.abi, contract_address);
      // console.log(proof.proof);
      // console.log(proof.inputs);

      const provider = new ethers.providers.JsonRpcProvider(
        "http://127.0.0.1:8545"
      );
      console.log(provider);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(contract_address, abi.abi, signer);
      // const contractWithSigner = contract.connect(signer);const startTime = performance.now();

      // Execute the command
      
      const startTime = performance.now();
      const tx = await contract.verifyTx(proof.proof, proof.inputs);

      // End measuring time
      const endTime = performance.now();

      // Calculate the execution time in milliseconds
      const execTime = endTime - startTime;

      console.log(`Execution time: ${executionTime} milliseconds`);

      console.log(tx);
      setExecutiontime(execTime)
      // const receipt = await tx.wait();

      // const verificationStatus = receipt.events?.filter(
      //   (e) => e.event === "VerificationStatus"
      // )[0]?.args?.status;

      let verificationStatus = tx;

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
      { verified &&
        <p>
          On-chain Verification Time: {executionTime} milliseconds
        </p>
      }
    </div>
  );
};

export default VerificationContainer;
