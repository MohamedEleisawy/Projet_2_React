import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../img/landing-image.png";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing" id="landing">
      <div className="container">
        <div className="text">
          <h2>Bienvenue dans le Monde d'Elzero</h2>
          <p>
            Ici, je vais partager tout sur ma vie. Les livres que je lis, les
            jeux auxquels je joue, les histoires et les événements.
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
};

export default Landing;
