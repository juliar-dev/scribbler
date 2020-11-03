import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

function Nav(props) {
    return (
        <nav className="navbar">
            <ul className="nav_list">
                <li>
                    <Link to="/dash"><HomeIcon></HomeIcon></Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;