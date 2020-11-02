import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="grid">
                <li><a href="/">[] Scribbler</a></li>
                <p>For the stories</p>
                <Link to="/sign_up"><button>Get Started</button></Link>
            </div>
        </div>
    )
};
