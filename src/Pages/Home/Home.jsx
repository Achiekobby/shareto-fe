import React from 'react'
import './Home.css'
import Profile from './../../Components/Profile/Profile';

const Home = () => {
  return (
    <div className="Home">
		<Profile/>
			<div className="post">Post</div>
			<div className="info">Right</div>
		</div>
  )
}

export default Home