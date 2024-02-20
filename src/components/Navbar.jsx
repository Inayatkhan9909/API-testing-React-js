

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>

            <div className="title">
                <h1>HomeWork</h1>
            </div>

            <div className="content">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/News'>News</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar