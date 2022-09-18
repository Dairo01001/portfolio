import React from "react";
import { Link } from "react-router-dom";

import CV from "../download/CV.pdf";

export default function Download() {
  return (
    <a href={CV} download="DairoGarciaCV.pdf">
      <button className="button-85">
        <i
          style={{
            paddingRight: "10px",
            paddingLeft: "10px",
            fontSize: "36px",
          }}
          className="fa-solid fa-download"
        ></i>
        Download CV
      </button>
    </a>
  );
}
