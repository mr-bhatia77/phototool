import React from 'react'
import './Nav.css'
import logo  from '../logo.JPG'
function Nav() {
    return (
        <div className="nav">
            <img src={logo}></img>
           <h3 className="heading"> The photo Tool</h3>
           <h3 className="creator">Bharat Bhatia</h3>
        </div>
    )
}

export default Nav
