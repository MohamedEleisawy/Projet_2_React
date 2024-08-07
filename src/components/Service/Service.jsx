import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = () => {
  const services = [
    {
      id: 1,
      icon: "fas fa-user-shield fa-4x",
      title: "Security",
      info: "Loremates, nemo."
    },
    {
      id: 2,
      icon: "fas fa-tools fa-4x",
      title: "Fixing Issues",
      info: "Lorem ipsuemo."
    },
    {
      id: 3,
      icon: "fas fa-tools fa-4x",
      title: "Security",
      info: "t consectetuates, nemo."
    },
    {
      id: 4,
      icon: "fas fa-map-marked-alt fa-4x",
      title: "Location",
      info: "Lorem."
    },
    {
      id: 5,
      icon: "fas fa-laptop-code fa-4x",
      title: "Coding",
      info: "Lorem "
    },
    {
      id: 6,
      icon: "fas fa-bullhorn fa-4x",
      title: "Marketing",
      info: "Lorem"
    }
  ];
  const [service] = useState(services);
  return (
    <div className="services" id="services">
      <h2 className="main-title">Services</h2>
      <div className="container">
        { service.map((les_services) => (
          <div className="box" key={les_services.id}>
          <i className={les_services.icon} />
          <h3>{les_services.title}</h3>
          <div className="info">
            <Link to="#">{les_services.info}</Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
