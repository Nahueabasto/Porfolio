import React from "react";
import react from "../img/reactt.png";
import html from "../img/html.png";
import css from "../img/css.png";
import bustrap from "../img/bustrap.png";
import git from "../img/git.png";
import github from "../img/github.png";
import js from "../img/js.png";
import postgres from "../img/postgres.png";
import node from "../img/node.png";
import "./Logo.css";

export default function Logo() {
  const logos = [html, css, js, react, bustrap, node, postgres, git, github];

  return (
    <div className="logo-container">
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index}`} className="logo" />
      ))}
    </div>
  );
}
