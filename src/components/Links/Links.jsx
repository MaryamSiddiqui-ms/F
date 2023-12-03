import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./links.css";

const Links = ({ arrayLinks, active }) => {
  const location = useLocation();

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(arrayLinks);
  }, []);

  const getSlug = (inputString) => {
    let lowercaseString = inputString.toLowerCase();
    let replacedString = lowercaseString.replace(/ /g, "-");

    return replacedString;
  };

  return (
    <div className="links-container">
      {links.map((link, index) => {
        navigation = "/" + getSlug(link);
        const isActive = location.pathname === navigation;
        return (
          <div className={isActive ? 'active' : ''} key={index}>
            <Link to={navigation} className={`link-wrapper nav-link ${isActive ? 'active' : ''}`}>
              {link}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
