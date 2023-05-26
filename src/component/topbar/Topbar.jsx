import React from "react";
import "./topbar.scss";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PersonIcon from "@mui/icons-material/Person";
export default function Topbar( {menuOpen ,setMenuOpen }) {
  return (
    <div className={" topbar " + (menuOpen && "active") }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            logo..
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>0935 953 7712</span>
          </div>
          <div className="itemContainer">
            <MarkunreadIcon className="icon" />
            <span>asmaabbasi7712@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
