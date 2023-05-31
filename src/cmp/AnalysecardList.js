import React from "react";
import CardofAnalyse from "./CardofAnalyse";

function AnalysecardList({ AnalysecardsData }) {
  return (
    <div className="card-list">
      {AnalysecardsData.map((data) => (
        <CardofAnalyse
          id={data.id}
          image={data.image}
          title={data.title}
        ></CardofAnalyse>
      ))}
    </div>
  );
}

export default AnalysecardList;
