import React from 'react'
import Logo from "../../img/logo.png"
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
   return (
    <div className="logo_search">
        <img src={Logo} alt="Twitter-Logo" />
        <div className="search">
            <input type="text" placeholder="#Explore" />
        </div>
        <div className="search_icon">
            <UilSearch/>
        </div>
    </div>
  )
}

export default LogoSearch