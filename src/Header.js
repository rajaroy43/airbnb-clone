import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlCX_KCBoFMSJ8ocIWvCaHDwhcN4DEgnkMYg&usqp=CAU"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" placeholder="Start your search" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <IconButton>
          <LanguageIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
