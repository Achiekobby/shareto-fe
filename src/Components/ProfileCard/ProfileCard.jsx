import React from "react";
import profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const profilePage = true;
  return (
    <div className="card">
      <div className="profile_card">
        <div className="profile_image">
          <img src={profile} alt="profile" />
        </div>
        <div className="profile_details">
          <h3>Jennifer Smith</h3>
          <p>Midwife | Kumasi, Ghana</p>
        </div>
        <div className="line"></div>
        <div className="follow">
          <div className="followers">
            <h3>7,655</h3>
            <p>Followers</p>
          </div>
          <div className="line_2"></div>
          <div className="followers">
            <h3>5</h3>
            <p>Following</p>
          </div>
          {profilePage && (
            <>
              <div className="line_2"></div>
              <div className="followers">
                <h3>3</h3>
                <p>Post(s)</p>
              </div>
            </>
          )}
        </div>
        <div className="line_3"></div>

        {profilePage ? (
          ""
        ) : (
          <button className="card-btn" type="submit">
            My Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
