import React, { useState } from "react";
import "./TeamMember.css";
import img_team1 from "../img/team-01.jpg";
import img_team2 from "../img/team-02.jpg";
import img_team3 from "../img/team-03.jpg";
import img_team4 from "../img/team-04.jpg";
import img_team5 from "../img/team-05.png";
import img_team6 from "../img/team-06.png";
import img_team7 from "../img/team-07.jpg";
import img_team8 from "../img/team-08.jpg";
import { Link } from "react-router-dom";

const TeamMember = () => {
  const teamMembers = [
    {
        id: 1,
        name: "John Doe",
        desc: "Web Developer",
        img: img_team1,
        },
        {
        id: 2,
        name: "Jane Doe",
        desc: "Web Designer",
        img: img_team2,
        },
        {
        id: 3,
        name: "Jack Doe",
        desc: "Web Developer",
        img: img_team3,
        },
        {
        id: 4,
        name: "Jill Doe",
        desc: "Web Designer",
        img: img_team4,
        },
        {
        id: 5,
        name: "Jim Doe",
        desc: "Web Developer",
        img: img_team5,
        },
        {
        id: 6,
        name: "Jenny Doe",
        desc: "Web Designer",
        img: img_team6,
        },
        {
        id: 7,
        name: "Jenny Doe",
        desc: "Web Designer",
        img: img_team7,
        },
        {
        id: 8,
        name: "Jenny Doe",
        desc: "Web Designer",
        img: img_team8,
        },
  ];
  const [team] = useState(teamMembers);
  return (
    <div className="team" id="team">
      <h2 className="main-title">Membres de la team</h2>
      <div className="container" >
        { team.map((teamMembers) => (
        <div className="box" key={team.id}>
          <div className="data">
            <img src={teamMembers.img} alt="" />
            <div className="social">
              <Link to="#">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link to="#">
                <i className="fab fa-youtube" />
              </Link>
            </div>
          </div>
          <div className="info">
            <h3>{teamMembers.name}</h3>
            <p>{teamMembers.desc}</p>
          </div>
        </div>
        ))}
        </div>
    </div>
  );
};

export default TeamMember;
