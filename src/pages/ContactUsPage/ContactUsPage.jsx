import React from "react";
import "./ContactUsPage.css";
import links from "../../statics/links";
import { Sidebar, Header } from "../../components";

const ContactUsPage = () => {
  return (
    <>
      <Sidebar links={links} />
      <Header />
      <div className="contact-us-page">
        <h1>Contact Us</h1>
        <div className="founders">
          <div className="founder">
            <h2>Mohammad Bilal Aziz</h2>
            <p>
              Email: <a className="email-link" href="mailto:k200397@nu.edu.pk">k200397@nu.edu.pk</a>
            </p>
          </div>
          <div className="founder">
            <h2>Maryam Siddiqui</h2>
            <p>
              Email: <a className="email-link" href="mailto:k200434@nu.edu.pk">k200434@nu.edu.pk</a>
            </p>
          </div>
          <div className="founder">
            <h2>Ali Shah Naushad</h2>
            <p>
              Email: <a className="email-link" href="mailto:k201078@nu.edu.pk">k201078@nu.edu.pk</a>
            </p>
          </div>
        </div>
        <div className="address">
          <h2>Address</h2>
          <p>123 Main Street, Anytown, USA</p>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
