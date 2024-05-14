import { useState, useEffect } from "react";
import {Sidebar, Header} from "../../components";
import links from "../../statics/links";
import rp from '../../assets/rp.png'
import ResearchPaperPDF from './ResearchPaper.pdf';
import './researchpaper.css'


const ResearchPaper = () => {
  return (
    <div>
      <Sidebar links={links} />
      <Header />
      <div className="main-r">
        <img className="icon"src={rp} alt="In Progress"/>
        <h3>Abstract</h3>
        <p>
        Knowledge Proofs(ZKPs) are increasingly used
in the domain of privacy-preserving machine learning. However,
recent works have not been widely incorporated due to the
complexities of ZKPs, and they lack generalization. To address
these issues, we present develop zkVML: Zero Knowledge Verifiable
Machine Learning, a novel Python library that seamlessly
integrates zero-knowledge proofs (ZKPs), allowing the verification
of public inference over a private model. zkVML ensures
privacy in both on-chain verification and off-chain computations,
particularly within decentralized environments like blockchains.
We design and develop several APIs, for handling complex computations
present in Machine Learning models. We successfully
validated our library by developing K-Nearest Neighbors(KNN),
Decision Trees(DT) and Convolutional Neural Networks(CNN)
models. While zkVML may incur increased execution times for
complex models and large datasets, it offers significant privacy
improvements alongside enhanced scalability, generalization, and
control over model creation. Through high-level Python APIs
abstracting complex ZKP functionalities, zkVML empowers
developers to maintain flexibility and privacy control while
guaranteeing data integrity. Our key contributions include generalized
proof generation, user-friendly Python abstractions for
easy integration, and on-chain verification via smart contracts.
Future work may focus on optimizing proof generation times and
extending zkVML’s functionality to a wider range of algorithms.
        </p>
        <a href={ResearchPaperPDF} download="ResearchPaper.pdf"> 
          <button className="download">Download Research Paper</button>
        </a>
      </div> 
    </div>
  );
};

export default ResearchPaper;
