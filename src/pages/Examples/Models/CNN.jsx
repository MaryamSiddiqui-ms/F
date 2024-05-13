import { useState, useEffect, useRef } from "react";
import {
  Sidebar,
  Header,
  ProofContainer,
  VerificationContainer,
} from "../../../components";
import links from "../../../statics/links";
import CNNProofContainer from "../../../components/Models/CNN/CNNProofContainer";
import "./models.css";
import axios from "axios";

const CNN = () => {
  const [isProof, setIsProof] = useState(true);
  const [passed, setPassed] = useState(false);
  const [proof, setProof] = useState(null)

  useEffect(() => {}, [[isProof]]);

  const handleProof = () => {
    setIsProof(false);
    setPassed(false);
  };

  const handlePassed = () => {
    setPassed(true);
  };

  const getProof = (obj) => {
    setProof(obj);
  }
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:80/CNN/mnist")
  //     .then((res) => {
  //       setImages(res.data);
  //       if (images.length != 0) console.log(images);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // const canvasRef = useRef(null);

  // const flattenArray = (arr) => arr.reduce((acc, val) => acc.concat(val), []);
  // const createImageDataURL = (imageData,containerWidth,containerHeight) => {
  //   imageData = flattenArray(imageData);
  //   const canvas = document.createElement("canvas");
  //   canvas.width = containerWidth;
  //   canvas.height = containerHeight;
  //   const ctx = canvas.getContext("2d");
  //   const imageDataObj = ctx.createImageData(28, 28);
  //   for (let i = 0; i < imageData.length; i++) {
  //     imageDataObj.data[i * 4] = imageData[i]; // Red
  //     imageDataObj.data[i * 4 + 1] = imageData[i]; // Green
  //     imageDataObj.data[i * 4 + 2] = imageData[i]; // Blue
  //     imageDataObj.data[i * 4 + 3] = 255; // Alpha
  //   }
  //   const posX = (containerWidth - 28) / 2;
  //   const posY = (containerHeight - 28) / 2;
  //   ctx.putImageData(imageDataObj, posX,posY);
  //   return canvas.toDataURL();
  // };

  return (
    <div>
      <Sidebar links={links} />
      <Header />
      <div className="model-header">
        CNN Model - Proving the inference on a MNIST dataset
      </div>

      {/* <div className="image-grid" >
        {images.map((image, index) => (
          <img
            className="mnist-img"
            key={index}
            src={createImageDataURL(image,100,100)}
            alt={`Image ${index}`}
            onClick={() => {
              // Handle click event here
              console.log(`Image ${image} clicked`);
            }}
          />
        ))}
      </div> */}
      <div className="examples">
        <div className={passed ? "lp-filled" : "lollipop"}>
          {isProof ? 1 : 2}
        </div>
        {isProof ? (
          <CNNProofContainer
            handleClick={handleProof}
            handleSubmitProof={handlePassed}
            handleGetProof={getProof}
          />
        ) : (
          <VerificationContainer handleSubmitVerification={handlePassed} proof={proof} model="cnn" />
        )}
      </div>
    </div>
  );
};

export default CNN;
