import React from 'react'
import './Home.css'
import Profile from './../../Components/Profile/Profile';
import PostCard from '../../Components/PostCard/PostCard';

const Home = () => {
  return (
    <div className="Home">
		<Profile/>
		<PostCard/>
			<div className="info">Right</div>
		</div>
  )
}

export default Home