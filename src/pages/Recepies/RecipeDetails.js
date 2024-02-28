import React from 'react';
import {useLoaderData} from "react-router-dom";

//Stylesheet

import './RecipeDetails.css';

function RecipeDetails(props) {
    const recipe = useLoaderData();

    return (
        <div className="recipe-details">
            <h2>{recipe.title}</h2>
            <p className="time">Takes {recipe.cookingTime} minutes to cook</p>
            <p className="ingredients">
                {recipe.ingredients.join(", ")}
            </p>
            <p className="desc">{recipe.method}</p>
        </div>
    );
}

export default RecipeDetails;

export const recipeDetailLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch('http://localhost:4000/recipes/' + id);
    if (!res.ok) throw Error("Could not find that recipe");

    return res.json();
}