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
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Article">
                  Article
                </NavLink>
              </li>
              <li>
                <NavLink to="/Gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/Features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/Other_Links">Other Links</NavLink>
                <div className="megaMenu">
                  <div className="image">
                    <img src="./imgs/megamenu.png" alt="" />
                  </div>
                  <ul className="links">
                    <li>
                      <NavLink to="/testimonials">
                        <i className="far fa-comments fa-fw" />
                        Testimonials
                      </NavLink>
                    </li>
                    <li>
                      <a href="#team">
                        <i className="far fa-user fa-fw" />
                        Team Members
                      </a>
                    </li>
                    <li>
                      <a href="#services">
                        <i className="far fa-building fa-fw" /> Services
                      </a>
                    </li>
                    <li>
                      <a href="#our-skills">
                        <i className="far fa-check-circle fa-fw" /> Our Skills
                      </a>
                    </li>
                    <li>
                      <a href="#work-steps">
                        <i className="far fa-clipboard fa-fw" /> How It Works
                      </a>
                    </li>
                  </ul>
                  <ul className="links">
                    <li>
                      <a href="#events">
                        <i className="far fa-calendar-alt fa-fw" /> Events
                      </a>
                    </li>
                    <li>
                      <a href="#pricing">
                        <i className="fas fa-server fa-fw" /> Pricing Plans
                      </a>
                    </li>
                    <li>
                      <a href="#video">
                        <i className="far fa-play-circle fa-fw" /> Top Videos
                      </a>
                    </li>
                    <li>
                      <a href="#stats">
                        <i className="far fa-chart-bar fa-fw" /> Stats
                      </a>
                    </li>
                    <li>
                      <NavLink to="/discount">
                        <i className="fas fa-percent fa-fw" /> Request A Discount
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
