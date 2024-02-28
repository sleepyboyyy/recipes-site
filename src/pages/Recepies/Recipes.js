import React from 'react';
import {Link} from "react-router-dom";

// Stylesheet
import './Recipes.css';

function Recipes({ recipes }) {

    return (
        <div className="recipes">
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
