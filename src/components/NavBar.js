import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        the backlog with bentnuts
                    </NavLink>
                    <NavLink to="/post">
                        Blog
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About me
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}