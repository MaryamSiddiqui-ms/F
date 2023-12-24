import { useState, useEffect } from "react";
import {Sidebar, Header} from "../../components";
import links from "../../statics/links";
import gif from '../../assets/in_progress.gif'
import './home.css';

const Home = () => {
  return (
    <div>
      <Sidebar links={links} />
      <Header />
      <div className="main-home">
        <section>
          <h1>
            Intro to Zero knowledge Proofs
          </h1>
          <p>
            Zero knowledge proofs is a set of cryptographic techniques that allow the proving party to prove the correctness or truth of a computation or a statement, without revealing any information about the statement.
            <br/>
            The verifier can use the proof to verify that the computation is indeed correct, without learning anything about it.
            <br/><br />
            Learn more about zero knowledge proofs in detail <a className="ref-link" target="blank" href="https://cointelegraph.com/explained/zero-knowledge-proofs-explained">here</a>
          </p>

          <h2>
            ZKML
          </h2>
          <p>
            <a target="blank" className="ref-link" href="https://worldcoin.org/blog/engineering/intro-to-zkml">ZKML</a> (Zero knowledge Machine Learning) is a Zero-knowledge machine learning (ZKML) is a field of research and development that has been making waves in cryptography circles recently.
            <br/>
            ZK proofs of ML models where computations are being hidden from the verifier (using the zero-knowledge property). The prover can prove the computational correctness of the ML models without revealing any further information.
          </p>
        </section>

        <section>
        </section>

      </div>
    </div>
  );
};

export default Home;
