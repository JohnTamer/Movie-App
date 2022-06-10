import "./navBar.css";
import { useEffect } from "react";
import { useState } from "react";
const NavBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src={require("../../assets/images/logo.png")}
        alt="netflix logo"
      />
      <img
        className="navbar__avatar"
        src={require("../../assets/images/avatar.png")}
        alt="ntflix avatar"
      />
    </div>
  );
};
export default NavBar;
