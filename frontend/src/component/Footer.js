import React from "react";

import "../Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footerbox">
      <h5>St. No. 10-D,New Dashmesh Nagar, Amritsar Road, Moga</h5>

      <div className="SocialMedia">
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
