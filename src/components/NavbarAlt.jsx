import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./NavbarAlt.css";

const NavbarAlt = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 100) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  // window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "heade heade-bg" : "heade"}>
      <Link to="/">
        <h1>My Portfolio</h1>
      </Link>
      <ul className={click ? "na-menu active" : "na-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="hamburgue" onClick={handleClick}>
        {click ? (
          <CloseIcon size={30} style={{ color: "#fff" }} />
        ) : (
          <MenuIcon size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default NavbarAlt;