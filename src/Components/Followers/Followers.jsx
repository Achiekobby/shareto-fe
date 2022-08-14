import React from 'react'

//*profile Images
import profileImageOne from "../../img/img1.png"
import profileImageTwo from "../../img/img2.png"
import profileImageThree from "../../img/img3.png"
import profileImageFour from "../../img/img4.jpg"
import "./Followers.css"

const Followers = () => {
  return (
    <div className="followers_section">
        <div className="header">
            <p className="heading">Who is following you</p>
        </div>
        <div className="followers_info">
            <div className="follower_img">
                <img src={profileImageOne} alt="profile_image" />
            </div>
            <div className="person_details">
                <h3>Andrew Thomas</h3>
                <span>@AndrewThomas</span>
            </div>
            <button className="follow-btn">Follow</button>
        </div>
        <div className="followers_info">
            <div className="follower_img">
                <img src={profileImageTwo} alt="profile_image" />
            </div>
            <div className="person_details">
                <h3>Hank Thunder</h3>
                <span>@HankThunder</span>
            </div>
            <button className="follow-btn">Follow</button>
        </div>
        <div className="followers_info">
            <div className="follower_img">
                <img src={profileImageThree} alt="profile_image" />
            </div>
            <div className="person_details">
                <h3>Hannah Jane</h3>
                <span>@HannahJane</span>
            </div>
            <button className="follow-btn">Follow</button>
        </div>
        <div className="followers_info">
            <div className="follower_img">
                <img src={profileImageFour} alt="profile_image" />
            </div>
            <div className="person_details">
                <h3>Alicia Smith</h3>
                <span>@AliciaSmith</span>
            </div>
            <button className="follow-btn">Follow</button>
        </div>
    </div>
  )
}

export default Followers