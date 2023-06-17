import React from 'react'
import "./styles/Header.css"

export const Header = () => {
  return (
    <div className='Navbar_componenet'>
        <div className="nav_left">
            <img src="https://mscs.dac.gov.in/images/emb.png" alt="india" />
        </div>
        <div className="nav_mid">
            <h2>MULTI-STATE CO-OPERATIVE SOCIETIES</h2>
            <h3>Ministry of Cooperation, Govt. of India</h3>
        </div>
        <div className="nav_right">
            <img src="https://mscs.dac.gov.in/images/MSCS_LOGO.png" alt="logo" />
        </div>
    </div>
  )
}
