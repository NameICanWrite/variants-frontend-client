import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
    const location = useLocation()
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            {location.pathname === '/' && <Link to="/about">About</Link>}
            
        </footer>
    )
}

export default Footer
