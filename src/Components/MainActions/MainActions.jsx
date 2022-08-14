import React from 'react'
import HomeIcon from '../../img/home.png'
import NotificationIcon from '../../img/noti.png'
import CommentIcon from '../../img/comment.png'
import {FiSettings} from 'react-icons/fi'
import './MainActions.css'
const MainActions = () => {
  return (
    <div className="main_actions">
        <div className="icons_container">
            <img src={HomeIcon} alt="" />
            <FiSettings className="setting" />
            <img src={NotificationIcon} alt="" />
            <img src={CommentIcon} alt="" />
        </div>
    </div>
  )
}

export default MainActions