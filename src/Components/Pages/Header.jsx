import React, { useState } from "react";
import logo from "../../logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
const Header = () => {
  const [inputData, setInputData] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  const logoutHandler = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <nav className="header">
      <img src={logo} alt="logo" onClick={handleClick} />
      <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <button type="submit" onClick={() => setInputData("")}>
          <i className="fa fa-search"></i>
        </button>
        <div className="logout-conatiner">
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
