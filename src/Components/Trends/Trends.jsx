import React from "react";
import "./Trends.css";
import trends from "../../Data/TrendsData";
import ShareModal from '../ShareModal/ShareModal'

const Trends = ({modalOpened, setModalOpened}) => {
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

      <button className="share-btn" onClick={()=>setModalOpened(true)}>Share</button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>

    </div>
  );
};

export default Trends;
