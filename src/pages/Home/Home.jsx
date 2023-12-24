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
      <div className="main">
        <h1>
          Intro to Zero knowledge Proofs
        </h1>
        <p>
          Zero knowledge proofs 
        </p>
      </div>
    </div>
  );
};

export default Home;
