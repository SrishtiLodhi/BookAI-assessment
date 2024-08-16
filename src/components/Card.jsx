import React from "react";
import card from "../assets/card.svg";

const Card = ({ title, text, imgSrc }) => {
  return (
    <div className="card" style={{ width: "22rem", background: 'var(--card-bg)' }}>
      <img className="card-img-top pb-0 pt-4" src={imgSrc} alt="Card image cap" style={{padding: "5rem"}} />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center mb-0" style={{color: 'var(--white)'}}>{title}</h5>
        <p className="card-text">
          "{text}"
        </p>
        <a href="#" className="d-flex justify-content-center text-decoration-none" style={{color: 'var(--text-color)'}}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
