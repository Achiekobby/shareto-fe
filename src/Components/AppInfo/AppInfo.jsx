import React, {useState}from 'react'
import './AppInfo.css'
import MainActions from './../MainActions/MainActions';
import Trends from '../Trends/Trends';


const AppInfo = () => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="app_info">
      <MainActions/>
      <Trends modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default AppInfo