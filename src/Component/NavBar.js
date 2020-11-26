import React from 'react';

 function NavBar()
{
    return(
        <div >
            <nav>
                <div className="logo">Mhlanganese</div>
                    <ul className="nav-links">
                        <li>
                           <a >Home</a>
                        </li>

                        <li>
                            <a>Portfolio</a>
                        </li>

                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>

                        <li>
                            <a>Contact</a>
                        </li>
                    </ul> 
                    <i class="fas fa-bars"></i> 
            </nav>
        </div>
    )
}
export default NavBar;