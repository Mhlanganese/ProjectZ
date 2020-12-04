import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import "../../src/App.css"

export default function Navbar() {

    const [isClicked , setIsClicked] = useState(false);
    const handleClick =() =>setIsClicked(!isClicked);
    const closeMenu = () =>setIsClicked(false)
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">

                <Link to='/'className="navbar-logo">
                     <i className="fas fa-user-graduate" /> Chelsey Mhlanga
                </Link>

            </div>

            <div className ="menu-icon" onClick={handleClick}>
                    <i className={isClicked ? "fas fa-times" : "fas fa-bars"} />
            </div>

           <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
             <li className="nav-item">
                <Link to="/Portfolio" className="nav-links" onClick={closeMenu} >
                    Portfolio  
                </Link>
             </li>

             <li className="nav-item">
                <Link to="/Projects" className="nav-links" onClick={closeMenu} >
                    Projects  
                </Link>
             </li>

             <li className="nav-item">
                <Link to="/About" className="nav-links" onClick={closeMenu} >
                    About  
                </Link>
             </li>

             <li className="nav-item">
                <Link to="/Contact" className="nav-links" onClick={closeMenu} >
                    Contact  
                </Link>
             </li>
           </ul>
        </nav>
        </>
    )
}
