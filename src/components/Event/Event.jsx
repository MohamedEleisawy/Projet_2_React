import React from 'react';
import "./Event.css";
import  img_Event from "../../img/events.png"
const Event = () => {
    return (
<div className="events" id="events">
  <div className="dots dots-up" />
  <div className="dots dots-down" />
  <h2 className="main-title">latest events</h2>
  <div className="container">
    <img src={img_Event} alt="event" className="event-img" />
    <div className="info">
      <div className="units">
        <div className="unit">
          <span>0-269</span>
          <span>Days</span>
        </div>
        <div className="unit">
          <span>0-11</span>
          <span>Hours</span>
        </div>
        <div className="unit">
          <span>0-14</span>
          <span>Minutes</span>
        </div>
        <div className="unit">
          <span>0-23</span>
          <span>Seconds</span>
        </div>
      </div>
      <div className="data">
        <h3 className="title">Tech Masters Event 2021</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
          tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi
          nulla in harum, veritatis porro
        </p>
      </div>
    </div>
    <div className="subscribe">
      <input type="email" placeholder="Enter votre Email" />
      <input type="submit" defaultValue="Subscribe" />
    </div>
  </div>
</div>

    );
}

export default Event;
