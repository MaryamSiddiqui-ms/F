// import { useState, useEffect } from "react";
// import {
//   Sidebar,
//   Header,
//   ProofContainer,
//   VerificationContainer,
// } from "../../components";
// import links from "../../statics/links";
// import "./examples.css";

// const Examples = () => {
//   const [isProof, setIsProof] = useState(true);
//   const [passed, setPassed] = useState(false);

//   useEffect(() => {
//   }, [[isProof]]);

//   const handleProof = () => {
//     setIsProof(false);
//     setPassed(false);
//   };

//   const handlePassed = () => {
//     setPassed(true);
//   };

//   return (
//     <div>
//       <Sidebar links={links} />
//       <Header />
//       <div className="model-header">
//         KNN Model - Proving the inference on a diabetes classification problem
//       </div>
//       <div className="examples">
//         <div className={passed ? "lp-filled" : "lollipop"}>
//           {isProof ? 1 : 2}
//         </div>
//         {isProof ? (
//           <ProofContainer
//             handleClick={handleProof}
//             handleSubmitProof={handlePassed}
//           />
//         ) : (
//           <VerificationContainer handleSubmitVerification={handlePassed} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Examples;

import { useState, useEffect } from "react";
import { MdCardHolder, Sidebar, Header } from "../../components";
import models from "../../statics/models";
import links from "../../statics/links";
import "./examples.css";
import metamask from '../../assets/metamask.png'

const Examples = () => {
  return (
    <div>
      <Sidebar links={links} />
      <Header />
        <div className="connect-btn">
          <p className="connect-txt">
            To run Examples it is recommeneded to connect to wallet
          </p>
          <button className="eg-btn"><img src={metamask} alt="metamask" className="metamask" />Connect Wallet</button>
        </div>
        <div className="card-container">
          <MdCardHolder docs={models} />
        </div>
    </div>
  );
};

export default Examples;
