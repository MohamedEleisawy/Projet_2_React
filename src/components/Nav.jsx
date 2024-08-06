import React from 'react';
import './Nav.css';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
        <div className="header" id="header">
          <div className="container">
            <Link to="/" className="logo">
              Elzero
            </Link>
            <ul className="main-nav">
              <li>
                <NavLink to="/">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/Article">
                  Article
                </NavLink>
              </li>
              <li>
                <NavLink to="/Gallery">Gallerie</NavLink>
              </li>
              <li>
                <NavLink to="/Features">Caractéristiques</NavLink>
              </li>
              <li>
                <NavLink to="/Other_Links">Autres Liens</NavLink>
                <div className="megaMenu">
                  <div className="image">
                    <img src="./img/megamenu.png" alt="" />
                  </div>
                  <ul className="links">
                    <li>
                      <NavLink to="/testimonials">
                        <i className="far fa-comments fa-fw" />
                        Témoignages
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/team">
                        <i className="far fa-user fa-fw" />
                        Membres de la team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/service">
                        <i className="far fa-building fa-fw" /> Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/competences">
                        <i className="far fa-check-circle fa-fw" /> Autres Compétences
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/fonctionnement"> 
                        <i className="far fa-clipboard fa-fw" /> Comment ça marche ?
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="links">
                    <li>
                      <NavLink to="/evenements">
                        <i className="far fa-calendar-alt fa-fw" />Événements
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/tarification">
                        <i className="fas fa-server fa-fw" /> Tarification
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/video">
                        <i className="far fa-play-circle fa-fw" /> Vidéo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/statistique">
                        <i className="far fa-chart-bar fa-fw" /> Statistiques
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/discount">
                        <i className="fas fa-percent fa-fw" /> Réduction
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>      
    );
}

export default Nav;
