import React from "react";
import "./main.css";
import AnalysecardList from "./AnalysecardList";

function Analyse() {
  const AnalysecardsData = [
    {
      id: 1,
      title: "breakfast",
      image: "doenload.jpeg",
    },
    {
      id: 2,
      title: "Lunch",
      image: "doenload.jpeg",
    },
    {
      id: 3,
      title: "Dinner",
      image: "doenload.jpeg",
    },
    {
      id: 4,
      title: "Acadamic",
      image: "doenload.jpeg",
    },
    {
      id: 5,
      title: "Grocery",
      image: "doenload.jpeg",
    },

    {
      id: 6,
      title: "Miscellaneous",
      image: "doenload.jpeg",
    },
  ];
  return (
    <div className="AnalysePage">
      <div className="Analyseheader">
        <h2>Analyse</h2>
      </div>
      <div className="Analysecardlist">
        <AnalysecardList AnalysecardsData={AnalysecardsData} />
      </div>
      <div className="Analysebutton"><button>+</button></div>
    </div>
  );
}

export default Analyse;
