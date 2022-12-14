import React,{useState} from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from './../ProfileModal/ProfileModal';
const InfoCard = () => {

  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" color="#f95f35"  onClick={()=>setModalOpened(true)}/>
          <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in</b>
        </span>
        <span>Accra</span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>
        </span>
        <span>Minimax Corporation</span>
      </div>
      <button className="share-btn">Logout</button>
    </div>
  );
};

export default InfoCard;
