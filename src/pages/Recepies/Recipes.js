import React from 'react';
import {Link} from "react-router-dom";

// Stylesheet
import './Recipes.css';
import {useTheme} from "../../API/useTheme";

function Recipes({ recipes }) {
    const { mode } = useTheme();

    return (
        <div className={`recipes ${mode}`}>
            {recipes.map(recipe => (
                <Link to={recipe.id} className="recipe-card" key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p className="time">{recipe.cookingTime}</p>
                    <p className="desc">{recipe.method.slice(0, 100)}...</p>
                </Link>
            ))}
        </div>
    );
}

export default Recipes;
