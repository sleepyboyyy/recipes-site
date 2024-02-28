import { Link, Outlet } from "react-router-dom";
import {useTheme} from "../API/useTheme";

//CSS Stylesheet
import './RootLayout.css'
import Searchbar from "../components/Searchbar";
import ThemeSelector from "../components/ThemeSelector";
import React from "react";

function RootLayout() {
    const { color } = useTheme();

    return (
        <div>
            <nav className="root-layout" style={{background: color}}>
                <div className="navContainer">
                    <h2><Link to="/">Cooking Sleepy</Link></h2>
                    <div className="navContent">
                        <Searchbar />
                        <Link to="create">Add Recipe</Link>
                    </div>
                </div>
            </nav>
            <ThemeSelector />
            <Outlet/>
        </div>
    );
}

export default RootLayout;