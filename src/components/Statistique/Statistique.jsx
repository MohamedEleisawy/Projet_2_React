import React,{useState} from 'react';
import './Statistique.css';
const Statistique = () => {
    const stats = [
        {
            id: 1,
            icon: "far fa-user fa-2x fa-fw",
            number: 150,
            text: "Clients",
        },
        {
            id: 2,
            icon: "fas fa-code fa-2x fa-fw",
            number: 135,
            text: "Projects",
        },
        {
            id: 3,
            icon: "fas fa-globe-asia fa-2x fa-fw",
            number: 50,
            text: "Countries",
        },
        {
            id: 4,
            icon: "far fa-money-bill-alt fa-2x fa-fw",
            number: 500,
            text: "Money",
        }
    ];
    const [stat] = useState(stats);
    return (
<div className="stats" id="stats">
  <h2>Our Awesome Stats</h2>
  <div className="container">
    {stat.map((s) => (
        <div className="box" key={s.id}>
      <i className={s.icon} />
      <span className="number" data-goal={s.number}>
        150
      </span>
      <span className="text"> {s.text} </span>
    </div>
))} 
  </div>
</div>

    );
}

export default Statistique;
