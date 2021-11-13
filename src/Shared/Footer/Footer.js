import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  const fb = <FontAwesomeIcon icon={faFacebook} />;
  const yt = <FontAwesomeIcon icon={faYoutube} />;
  const ld = <FontAwesomeIcon icon={faLinkedin} />;

  const ig = <FontAwesomeIcon icon={faInstagram} />;
  const g = <FontAwesomeIcon icon={faGooglePlus} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const mail = <FontAwesomeIcon icon={faEnvelope} />;

  return (
    <div className="footer">
      <div className="row w-100 mx-auto">
        <div className="col-md-3 footer-sections">
          <h4 className="text-white">Connect with us via</h4>
          <span className="icons">{fb}</span>
          <span className="icons">{yt}</span>
          <span className="icons">{ld}</span>
          <span className="icons">{ig}</span>
          <span className="icons">{g}</span>
        </div>
        <div className="col-md-3 footer-sections">
          <h4 className="text-white">About</h4>
          <h5 className="text-white">About us</h5>
          <h5 className="text-white">FAQ</h5>
          <h5 className="text-white">Terms and conditions</h5>
        </div>
        <div className="col-md-3 footer-sections">
          <h4 className="text-white">Useful Links</h4>
          <h5 className="text-white">Discounts</h5>
          <h5 className="text-white">Coupons</h5>
          <h5 className="text-white">Blog Posts</h5>
        </div>
        <div className="col-md-3 footer-sections">
          <h4 className="text-white">Contact us:</h4>
          <h5 className="text-white">
            <span className="icons">{phone}</span>Phone: +88-01777777
          </h5>
          <h5 className="text-white">
            <span className="icons">{mail}</span> Email: carbuy007@gmail.com
          </h5>
        </div>
      </div>
      <hr className="mx-auto hr" />
      <span className="fw-bold text-white">Copyright &copy; 2021 - SFP</span>
    </div>
  );
};

export default Footer;
