import React, { useState } from "react";
import "./FeaturesBloc.css";
import { Link } from "react-router-dom";
import img1 from "../../img/features-01.jpg";
import img2 from "../../img/features-02.jpg";
import img3 from "../../img/features-03.jpg";

const FeaturesBloc = () => {
  const initialFeatures = [
    {
      id: 1,
      title: "Quality",
      img: img1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
      link: "#",
      className: "box quality",
    },
    {
      id: 2,
      title: "Time",
      img: img2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
      link: "#",
      className: "box time",
    },
    {
      id: 3,
      title: "Passion",
      img: img3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
      link: "#",
      className: "box passion",
    },
  ];

  const [features] = useState(initialFeatures);

  return (
    <div className="features" id="Features">
      <h2 className="main-title">Features</h2>
      <div className="container">
        {features.map((feature) => (
          <div className={feature.className} key={feature.id}>
            <img src={feature.img} alt={feature.title} />
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            <Link to={feature.link}>More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBloc;
