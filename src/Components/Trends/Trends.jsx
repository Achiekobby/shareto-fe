import React from "react";
import "./Trends.css";
import trends from "../../Data/TrendsData";

const Trends = () => {
  return (
    <div className="trend_container">
      <div className="trend_card">
        <h3 className="heading">Trends for You</h3>
        {trends.map((trend, index) => {
          const { hashTag, shares } = trend;
          return (
            <div className="trend">
              <h4 className="hash_tag">{hashTag}</h4>
              <p>{shares} Shares</p>
            </div>
          );
        })}
      </div>

      <button className="share-btn">Share</button>
    </div>
  );
};

export default Trends;
