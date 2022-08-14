import React from 'react'
import "./PostCard.css"
import {FaImages} from 'react-icons/fa'
import {AiOutlinePlayCircle,AiOutlineSchedule} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
import profileImg from '../../img/profileImg.jpg'
const PostCard = () => {
  return (
    <div className="post_card">
        <div className="post_card_wrapper">
            <div className="form_field">
                <div className="profile_img">
                    <img src={profileImg} alt="profile_image" />
                </div>
                <form className="form-control">
                    <input type="text" placeholder="What's happening?" className="form-control" />
                </form>
            </div>
            <div className="uploads">
                <div className="icon_action">
                    <FaImages className="icon"/>
                    <span>Photo</span>
                </div>
                <div className="icon_action">
                    <AiOutlinePlayCircle className="icon"/>
                    <span>Video</span>
                </div>
                <div className="icon_action">
                    <IoLocationOutline className="icon"/>
                    <span>Location</span>
                </div>
                <div className="icon_action">
                    <AiOutlineSchedule className="icon"/>
                    <span>Schedule</span>
                </div>
                <button className="share-btn">Share</button>
            </div>
        </div>
    </div>
  )
}

export default PostCard