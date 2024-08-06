import React, { useState } from "react";
import "./Avis.css";
import img_avatar1 from "../img/avatar-01.png";
import img_avatar2 from "../img/avatar-02.png";
import img_avatar3 from "../img/avatar-03.png";
import img_avatar4 from "../img/avatar-04.png";
import img_avatar5 from "../img/avatar-05.png";
import img_avatar6 from "../img/avatar-06.png";
const Avis = () => {
  const ListeAvis = [
    {
      id: 1,
      name: "John Doe",
      job: "Web Developer",
      rate: 5,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos.",
      img: img_avatar1,
    },
    {
      id: 2,
      name: "Jane Doe",
      job: "Web Designer",
      rate: 4,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos.",
      img: img_avatar2,
    },
    {
      id: 3,
      name: "Jack Doe",
      job: "Web Developer",
      rate: 5,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos.",
      img: img_avatar3,
    },
    {
      id: 4,
      name: "Jill Doe",
      job: "Web Designer",
      rate: 4,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos.",
      img: img_avatar4,
    },
    {
      id: 5,
      name: "Jim Doe",
      job: "Web Developer",
      rate: 5,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos.",
      img: img_avatar5,
    },
    {
      id: 6,
      name: "Jenny Doe",
      job: "Web Designer",
      rate: 4,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quos.",
      img: img_avatar6,
    }
  ];
  
  const [avis] = useState(ListeAvis);

  return (
    <div className="testimonials" id="testimonials">
      <h2 className="main-title">testimonials</h2>
      <div className="container">
        {avis.map((aviss) => (
          <div className="box" key={aviss.id}>
            <img src={aviss.img} alt={`${aviss.name}`} />
            <h3>{aviss.name}</h3>
            <span className="title">{aviss.job}</span>
            <div className="rate">
              {[...Array(aviss.rate)].map((i) => ( 
              // ...Array créer un tableau contenant n éléments. 
              // Ensuite, on utilise map pour parcourir le tableau et afficher les étoiles.
              // i est un paramètre qui représente chaque élément du tableau.
              // key={i} est utilisé pour donner une clé unique à chaque élément.
                <i key={i} className="filled fas fa-star" />
              ))}
              {[...Array(5 - aviss.rate)].map((i) => (
                // 5 - aviss.rate pour afficher les étoiles vides.
                // Par exemple, si le taux est 4, alors 5 - 4 = 1, donc une étoile vide sera affichée.
                <i key={i} className="far fa-star" />
              ))}
            </div>
            <p>{aviss.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avis;
