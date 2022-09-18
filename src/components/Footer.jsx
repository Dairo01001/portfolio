import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <p>Dairo García Naranjo &copy; 2022</p>
      </div>
      <div className="footer-right">
        <a
          href="https://www.linkedin.com/in/dairo-garcía-naranjo"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Dairo01001" target="_blank">
          <i className="fa-brands fa-square-github"></i>
        </a>
      </div>
    </footer>
  );
}
