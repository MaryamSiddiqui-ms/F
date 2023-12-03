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
        <img src={gif} alt="In Progress" width="70%" />
        <h3>
          This Project is currently in Progress...
        </h3>
      </div>
    </div>
  );
};

export default Home;
