import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="header">
          <div>
            <NavLink to={""}>Trailers & Chill</NavLink>
          </div>
          <div className="links">
            <NavLink className="link" to={"/blog"}>Blog</NavLink>
            <NavLink className="link" to={"/about"}>About</NavLink>
            <NavLink className="link" to={"/contact"}>Contact</NavLink>
          </div>
        </nav>
    )
}
