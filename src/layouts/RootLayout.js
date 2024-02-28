import React from 'react';
import { Link, Outlet } from "react-router-dom";

//CSS Stylesheet
import './RootLayout.css'
import Searchbar from "../components/Searchbar";

function RootLayout(props) {
    return (
        <div>
            <nav className="root-layout">
                <div className="navContainer">
                    <h2><Link to="/">Cooking Sleepy</Link></h2>
                    <div className="navContent">
                        <Searchbar />
                        <Link to="create">Add Recipe</Link>
                    </div>
                </div>
            </nav>

            <Outlet/>
        </div>
    );
}

export default RootLayout;