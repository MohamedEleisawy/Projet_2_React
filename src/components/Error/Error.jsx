import React from "react";
import "./Error.css";
const Error = () => {
  return (
    <div>
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-code">404</h1>
          <p className="error-message">
            Oops! La page que vous cherchez est introuvable.
          </p>
          <a href="/" className="error-link">
            Retour à la page d'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
