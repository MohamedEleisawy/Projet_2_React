import React from 'react';
import { Link } from "react-router-dom";
import landingImg from "../img/landing-image.png";
import "./Landing.css";
const Landing = () => {
    return (
  <div className="landing" id="landing">
    <div className="container">
      <div className="text">
        <h2>Welcome, To Elzero World</h2>
        <p>
          Here Iam gonna share everything about my life. Books Iam reading,
          Games Iam Playing, Stories and Events
        </p>
      </div>
      <div className="image">
        <img src={landingImg} alt="landing" />
      </div>
    </div>
    <Link to="/article" className="go-down">
      <i className="fas fa-angle-double-down fa-2x" />
    </Link>
</div>

    );
}

export default Landing;
