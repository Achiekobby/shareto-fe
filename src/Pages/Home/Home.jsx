import React from 'react'
import './Home.css'
import Profile from './../../Components/Profile/Profile';
import PostField from '../../Components/PostField/PostField';
import AppInfo from './../../Components/AppInfo/AppInfo';

const Home = () => {
  return (
    <div className="Home">
		<Profile/>
		<PostField/>
		<AppInfo/>
	</div>
  )
}

export default Home