import React from "react";
import ProfileLeft from "../../Components/ProfilePage/ProfileLeft/ProfileLeft";
import "./Profile.css";
import ProfileCard from "./../../Components/ProfileCard/ProfileCard";
import Post from './../../Components/Post/Post';
import PostCard from "../../Components/PostCard/PostCard";
import AppInfo from './../../Components/AppInfo/AppInfo';
const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile-center">
        <ProfileCard />
        <PostCard/>
        <Post/>
      </div>
      <AppInfo/>
    </div>
  );
};

export default Profile;
