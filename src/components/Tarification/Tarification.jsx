import React,{useState} from 'react';
import './Tarification.css';
import { Link } from 'react-router-dom';
import ImgTrafication1 from '../../img/hosting-professional.png';
import ImgTrafication2 from '../../img/hosting-advanced.png';
import ImgTrafication3 from '../../img/hosting-professional.png';
const Tarification = () => {
    const box = [
        {
            id: 1,
            classNameBox: "box",
            title: "Professional",
            img: ImgTrafication1,
            amount: "$45",
            time: "Per Month",
            list: [
                "50GB HDD Space",
                "20 Email Addresses",
                "10 Subdomains",
                "20 Databases",
                "Professional Support"
            ]
        },
        {
            id: 2,
            classNameBox: "box popular",
            title: "Advanced",
            img: ImgTrafication2,
            amount: "$25",
            time: "Per Month",
            list: [
                "20GB HDD Space",
                "10 Email Addresses",
                "5 Subdomains",
                "8 Databases",
                "Advanced Support"
            ]
        },
        {
            id: 3,
            classNameBox: "box",
            title: "Professional",
            img: ImgTrafication3,
            amount: "$45",
            time: "Per Month",
            list: [
                "50GB HDD Space",
                "10 Email Addresses",
                "10 Subdomains",
                "20 Databases",
                "professional Support"
            ]
        },
    ];
    const [boxs] = useState(box); 
    return (
<div className="pricing" id="pricing">
  <div className="dots dots-up" />
  <div className="dots dots-down" />
  <h2 className="main-title">pricing plans</h2>
  <div className="container">
    {boxs.map((box) => (
    <div className={box.classNameBox} key={box.id}>
      <div className="title">{box.title} </div>
      <img src={box.img} alt="host" />
      <div className="price">
        <span> {box.amount} </span>
        <span> {box.time} </span>
      </div>
      <ul>
        {box.list.map((list, index) => (
        <li key={index}> {list} </li>
        ))}
      </ul>
      <Link to="#">Choose Plan</Link>
    </div>
    ))}
  </div>
</div>

    );
}

export default Tarification;