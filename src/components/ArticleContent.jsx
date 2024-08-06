import React , {useState} from 'react';
import { Link } from "react-router-dom";
import "./ArticleContent.css";
import aricle1 from "../img/cat-01.jpg";
import aricle2 from "../img/cat-02.jpg";
import aricle3 from "../img/cat-03.jpg";
import aricle4 from "../img/cat-04.jpg";
import aricle5 from "../img/cat-05.jpg";
import aricle6 from "../img/cat-06.jpg";
import aricle7 from "../img/cat-07.jpg";
import aricle8 from "../img/cat-08.jpg";
const ArticleContent = () => {
  const article = [
    {
      id: 1,
      img: aricle1,
      title: "Test Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
    },
    {
      id: 2,
      img: aricle2,
      title: "Test Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
      more : "Read More",
    },
    {
      id: 3,
      img: aricle3,
      title: "Test Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
      more : "Read More",
    },
    {
      id: 4,
      img: aricle4,
      title: "Test Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
      more : "Read More",
    },
    {
      id: 5,
      img: aricle5,
      title: "Test Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
      more : "Read More",
    },
    {
      id: 6,
      img: aricle6,
      title: "Test Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
      more : "Read More",
    },
    {
      id: 7,
      img: aricle7,
      title: "Test Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
      more : "Read More",
    },
    {
      id: 8,
      img: aricle8,
      title: "Test Title",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit",
      more : "Read More",
    },
  ];
  const [articles] = useState(article);

    return (
      <div className="article" id="Article">
      <h2 className="main-title">Articles</h2>
      <div className="container">
        {articles.map((article) => (
          <div className="box" key={article.id}>
            <img src={article.img} alt={article.title} />
            <div className="content">
              <h3>{article.title}</h3>
              <p>{article.desc}</p> 
            </div>
            <div className="info">

              <Link to="#">Read More</Link>
              <i className="fas fa-long-arrow-alt-right" />
            </div>
          </div>
        ))}
      </div>
    </div>

    );
}

export default ArticleContent;
