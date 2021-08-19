import React from 'react'
import companyLogo from './../img/logo.png';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/"><img alt="Our logo" src={companyLogo} height="70"/> </Link>
                    <ul>
                        <li>Home</li>
                        <li><Link href="#">Ohers</Link></li>
                
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
