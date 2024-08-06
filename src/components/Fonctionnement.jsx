import React, { useState } from "react";
import "./Fonctionnement.css";
import workImg from "../img/work-steps.png";
import workImg2 from "../img/work-steps-2.png";
import workImg3 from "../img/work-steps-3.png";
const Fonctionnement = () => {
    const fonctionnements = [
        {
          id: 1,
          img: workImg,
          title: "Business Analysis",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel",
        },
        {
          id: 1,
          img: workImg2,
          title: "Architecture",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel",
        },
        {
          id: 1,
          img: workImg3,
          title: "Developement",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel",
        },
      ];
    const [Lefonctionnement] = useState(fonctionnements);
  return (
    <div className="works" id="work">
      <h2 className="main-title">how it works ?</h2>
      <div className="container">
        <img src={workImg} alt="" className="image" />
        <div className="info">
          {Lefonctionnement.map((fonctionnements) => (
            <div className="boxs" key={fonctionnements.id}>
              <img src={fonctionnements.img} alt="" />
              <div className="data">
                <h3>{fonctionnements.title}</h3>
                <p>
                    {fonctionnements.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fonctionnement;

// {
  /* <div className="boxs">
<img src="./imgs/work-steps-2.png" alt="" />
<div className="data">
  <h3>Architecture</h3>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
    nesciunt obcaecati quisquam quis laborum recusandae debitis vel
  </p>
</div>
</div>
<div className="boxs">
<img src="./imgs/work-steps-3.png" alt="" />
<div className="data">
  <h3>Developement</h3>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
    nesciunt obcaecati quisquam quis laborum recusandae debitis vel
  </p>
</div>
</div> */
// }
