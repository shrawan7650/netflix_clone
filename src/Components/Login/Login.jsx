/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./login.css";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [show, SetShow] = useState(true);
  const openModal = () => {
    SetShow(false);
  };
  const [inputFiled, SetInputFiled] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    SetInputFiled((prev) => {
      const { name, value } = event.target;
      return { ...prev, [name]: value };
    });
  };
  const sumbitHandler = (event) => {
    event.preventDefault();

    if (!inputFiled.email || !inputFiled.password) {
      alert("Please enter your Email and password");
    } else {
      alert("Login  Successfully");
      navigate("/home");
    }
  };

  return (
    <div className="signup-conatiner-login">
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div class="form-wrappers-login">
        <h2>Login In</h2>
        <form onSubmit={sumbitHandler}>
          <div className="form-controler-login">
            <input
              type="text"
              name="email"
              placeholder="Email or phone number"
              onChange={changeHandler}
            />
          </div>
          <div className="form-controler-login">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="btnlogin">
            Login In
          </button>
          <div className="form-help-login">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <a htmlFor="#">Need help?</a>
          </div>
        </form>
        <p>
          New to Netflix?{" "}
          <Link to="/registration">
            <span id="Sign">Sign Up Now</span>
          </Link>
        </p>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          {show ? (
            <a style={{ cursor: "pointer" }} onClick={openModal}>
              Learn more.
            </a>
          ) : (
            <p id="learn-more">
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              <a>providing</a>,<a>maintaining</a>, and <a>improving </a>the
              reCAPTCHA service and for general security purposes (it is not
              used for personalised advertising by Google).
            </p>
          )}
        </small>
      </div>
      <div className="footer-login">
        <div className="footercon-login">
          <div className="flex1">
            <h5>Questions? Call 1-866-579-7172</h5>
          </div>

          <ul className="list1">
            <li>
              <a htmlFor="">FAQ</a>
            </li>
            <li>
              <a htmlFor="">Investor Relation</a>
            </li>
            <li>
              <a htmlFor="">Ways to Watch</a>
            </li>

            <li>
              <a htmlFor="">Corporate Information</a>
            </li>
            <li>
              <a htmlFor="">Netflix Originals</a>
            </li>
          </ul>
          <ul className="list1">
            <li>
              <a htmlFor="">Home</a>
            </li>
            <li>
              <a htmlFor="">Jobs</a>
            </li>
            <li>
              <a htmlFor="">Terms of Use</a>
            </li>
            <li>
              <a htmlFor="">Contact Us</a>
            </li>
          </ul>
          <ul className="list1">
            <li>
              <a htmlFor="">Account</a>
            </li>
            <li>
              <a htmlFor="">Redeem Gift Cards</a>
            </li>
            <li>
              <a htmlFor="">Privacy</a>
            </li>
            <li>
              <a htmlFor="">Speed Test</a>
            </li>
          </ul>
          <ul className="list1">
            <li>
              <a htmlFor="">Media Center</a>
            </li>
            <li>
              <a htmlFor="">Buy Gift Cards</a>
            </li>
            <li>
              <a htmlFor="">Cookie Preferences</a>
            </li>
            <li>
              <a htmlFor="">Legal Notices</a>
            </li>
          </ul>
        </div>
        <div className="language-login">
          <i className="fa fa-search"></i>

          <select name="cars" id="cars">
            <option value="English">English</option>
            <option value="saab">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Login;
