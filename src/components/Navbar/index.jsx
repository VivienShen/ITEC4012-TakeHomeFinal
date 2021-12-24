import {
    NavLink
} from "react-router-dom";

import { Logout } from "../Logout"

import "./styles.css"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">Posts</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/me"> My Profile</NavLink>
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
        </nav>
    )
}