import React, { useState } from "react";
import logo from "../../logo.png";
import "./registration.css";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
const Create = () => {
  const [searchParams,setSearchParams] =  useSearchParams()
  const initialEmailValue = searchParams.get('email')
  const navigate = useNavigate();
  const [inputFiled, SetInputFiled] = useState({
    email: initialEmailValue,
    password: "",
    cpassword: "",
  });
  const [show, setShow] = useState(true);
  const openModal = () => {
    setShow(false);
  };
  const changeHandler = (event) => {
    SetInputFiled((prev) => {
      const { name, value } = event.target;
      return { ...prev, [name]: value };
    });
  };
  const sumbitHandler = (event) => {
    event.preventDefault();

    if (!inputFiled.email || !inputFiled.password || !inputFiled.cpassword) {
      alert("please all field are required");
    } else if (inputFiled.password !== inputFiled.cpassword) {
      alert("password not match");
    } else {
      alert("Registration Successfully");
      navigate("/loginpage");
    }
  };

  return (
    <>
      <div className="signup-conatiner">
        <div className="nav">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div class="form-wrapper">
          <h2>Registration</h2>
          <form onSubmit={sumbitHandler}>
            <div class="form-control">
              <input
                type="text"
                name="email"
                placeholder="Email or phone number"
                value={inputFiled.email}
                onChange={changeHandler}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={changeHandler}
              />

              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                onChange={changeHandler}
              />
            </div>
            <button type="submit">Sign Up</button>
            <div class="form-help">
              <div class="remember-me">
                <input type="checkbox" required id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <a href="https://www.netflix.com/in/LoginHelp">Need help?</a>
            </div>
          </form>
          <p>
            New to Netflix?
            <Link to="/loginpage">
              <span id="login">Login Now</span>
            </Link>
          </p>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            {show ? (
              <a  style={{cursor:"pointer"}} onClick={openModal}>
                Learn more.
              </a>
            ) : (
              <p id="learn-more">
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                <a>providing</a>, <a>maintaining</a>, and <a>improving </a>the reCAPTCHA service and
                for general security purposes (it is not used for personalised
                advertising by Google).
              </p>
            )}
          </small>
        </div>
        <div className="footer">
        <div className="footercon">
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
        <div className="language">
          <i className="fa fa-search"></i>

          <select name="cars" id="cars">
            <option value="English">English</option>
            <option value="saab">Hindi</option>
          </select>
        </div>
      </div>
      </div>
    </>
  );
};

export default Create;
