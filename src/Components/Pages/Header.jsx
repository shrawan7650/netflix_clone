import React, { useState } from "react";
import logo from "../../logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from 'react-toastify';

const Header = () => {
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
const logoutHandler = ()=>{
  toast.success('Logout Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Bounce
    });
  navigate('/')
}


  return (
    <nav className="header">
      <img src={logo} alt="logo" onClick={handleClick} />
      <div>
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
          onChange={(event)=>setInputData(event.target.value)}
        />
        <button type="submit" onClick={()=>setInputData("")}>
          <i className="fa fa-search"></i>
        </button>
        <div className="logout-conatiner">
        <button onClick={logoutHandler} >Logout</button>
      </div>
      </div>
      
    </nav>
  );
};

export default Header;
