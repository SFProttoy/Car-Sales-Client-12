import React from "react";
import { Image } from "react-bootstrap";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <Image
        className="notfound"
        src="https://i.ibb.co/VYFz3zx/404.jpg"
        alt="nf"
        fluid
      />
    </div>
  );
};

export default NotFound;
