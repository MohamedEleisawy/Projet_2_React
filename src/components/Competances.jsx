import React, { useState } from "react";
import "./Competances.css";
import CompetancesImg from "../img/skills.png";

const Competances = () => {
  const LesCompetances = [
    {
      id: 1,
      title: "HTML",
      pourcentage: "80%",
      width: "80%",
      dataProgress: "80%",
    },
    {
      id: 2,
      title: "JavaScript",
      pourcentage: "70%",
      width: "70%",
      dataProgress: "70%",
    },
    {
      id: 3,
      title: "CSS",
      pourcentage: "85%",
      width: "85%",
      dataProgress: "85%",
    },
    {
      id: 4,
      title: "Python",
      pourcentage: "80%",
      width: "80%",
      dataProgress: "80%",
    },
  ];
  const [competances] = useState(LesCompetances);
  return (
    <div className="our-skills" id="our-skills">
      <h2 className="main-title">Our Skills</h2>
      <div className="container">
        <img src={CompetancesImg} alt="Skills Illustration" style={{width : "50%"}}  />
        <div className="skills"> 
          {competances.map((competance) => (
            <div className="skill" key={competance.id}>
              <h3>
                {competance.title} <span>{competance.pourcentage}</span>
              </h3>
              <div className="progress">
                <span
                  style={{ width: competance.width }}
                  data-progress={competance.dataProgress}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competances;
