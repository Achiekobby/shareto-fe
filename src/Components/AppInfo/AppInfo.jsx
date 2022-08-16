import React from 'react'
import './AppInfo.css'
import MainActions from './../MainActions/MainActions';
import Trends from '../Trends/Trends';


const AppInfo = () => {
  return (
    <div className="app_info">
      <MainActions/>
      <Trends/>
    </div>
  )
}

export default AppInfo