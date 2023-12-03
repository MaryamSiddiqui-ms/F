import { useState, useEffect } from "react";
import './header.css';

const Header = () => {
  return (
    <div id="header">
      <h1>zkVML</h1>
      <h2>Zero-Knowledge Validating Machine Learning Model</h2>
      <hr className="header-divider" />
    </div>
  );
};

export default Header;
