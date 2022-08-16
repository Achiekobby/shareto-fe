import React from 'react'
import LogoSearch from '../../LogoSearch/LogoSearch'
import './ProfileLeft.css'
import InfoCard from './../InfoCard/InfoCard';
import Followers from '../../Followers/Followers';
const ProfileLeft = () => {
  return (
    <div className="profileLeft">
        <LogoSearch/>
        <InfoCard/>
        <Followers/>
    </div>
  )
}

export default ProfileLeft