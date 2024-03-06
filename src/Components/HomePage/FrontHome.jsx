/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import "./frontHome.css";
import logo from "../../logo.png";
import { Link, useNavigate } from "react-router-dom";
const FrontHome = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  const clickHandler = () => {
    if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
      alert("Please enter a valid email address");
    } else {
      navigate(`/registration?email=${value}`);
    }
  };
  console.log(value);
  return (
    <>
      <div className="navbar">
        <li className="logo">
          <img src={logo} />
        </li>
        <button className="buttons">
          <Link id="link" to="/loginpage">
            Login In
          </Link>
        </button>
      </div>

      <div className="main">
        <div className="area">
          <h2>Unlimited movies, TV shows, and more.</h2>
          <h3>Watch anywhere. Cancel anytime.</h3>

          <div className="search">
            <input
              type="email"
              className="box"
              placeholder="Email address"
              onChange={valueChangeHandler}
            />

            <button className="try" onClick={clickHandler}>
              Get Started<i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <h4>
            Ready to watch? Enter your email to create or access your account
          </h4>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="container1">
        <div className="text">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watchx on Smart TVs, Playstation, Xbox, <br />
            Chromecast, Apple TV, Blu-ray players, and
            <br />
            more.
          </p>
        </div>
        <div className="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="container2">
        <div className="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png" />
        </div>
        <div className="text2">
          <h1>Download your shows to watch on the go.</h1>
          <p>Save your data and watch all your favorites offline.</p>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="container3">
        <div className="text3">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on <br />
            your phone, tablet, laptop, and TV without paying more.
          </p>
        </div>
        <div className="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="question">
        <h1>Frequently Asked Questions</h1>
        <div className="quest">
          <div className="textbox">What is Netflix?</div>
          <IoAddOutline className="la-plus" />
        </div>
        <div className="quest">
          <div className="textbox">How much does Netflix cost?</div>
          <IoAddOutline className="la-plus" />
        </div>
        <div className="quest">
          <div className="textbox">Where can I watch?</div>
          <IoAddOutline className="la-plus" />
        </div>{" "}
        <div className="quest">
          <div className="textbox">How do I cancel?</div>
          <IoAddOutline className="la-plus" />
        </div>
        <div className="quest">
          <div className="textbox">What can I watch on Netflix??</div>
          <IoAddOutline className="la-plus" />
        </div>
        <div className="quest">
          <div className="textbox">What is Netflix?</div>
          <IoAddOutline className="la-plus" />
        </div>
        <div className="search">
          <input type="text" className="box" placeholder="Email address" />
          <span className="try">
            Get Started<i className="fas fa-chevron-right"></i>
          </span>
        </div>
        <h4>
          Ready to watch? Enter your email to create or access your account
        </h4>
      </div>
      <hr className="hr"></hr>
      <div className="footerhome">
        <div className="footercon">
          <div className="flex1">
            <h5>Questions? Call 1-866-579-7172</h5>
            <h5></h5>
          </div>

          <ul className="list1">
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Investor Relation</a>
            </li>
            <li>
              <a href="">Ways to Watch</a>
            </li>

            <li>
              <a href="">Corporate Information</a>
            </li>
            <li>
              <a href="">Netflix Originals</a>
            </li>
          </ul>
          <ul className="list1">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <ul className="list1">
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Speed Test</a>
            </li>
          </ul>
          <ul className="list1">
            <li>
              <a href="">Media Center</a>
            </li>
            <li>
              <a href="">Buy Gift Cards</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FrontHome;
