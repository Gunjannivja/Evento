import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='root'>
       <div className="subdiv">
          <div className="leftBox">
            <div className="logoName">Evento</div>
          </div>
          <div className="rightBox">
            <ul>
                <li>Home</li>
                <li>FAQs</li>
                <li>About Us</li>
            </ul>
          </div>
       </div>
    </div>
  )
}

export default NavBar
