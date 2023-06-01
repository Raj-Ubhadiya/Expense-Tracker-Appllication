import React from "react";
import "./main.css";

function CardofAnalyse({ title}) {
  return (
    <div className="Analysecards">
      <div className="imageofcard">
        <img src="download.jpeg" alt="hh" />
      </div>
      <div className="headerofcards">
        <div className="title">{title}</div>
      </div>
    </div>
  );
}

export default CardofAnalyse;
