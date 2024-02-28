import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import postData from "../API/postData";

// Stylesheet
import './Create.css'

function Create(props) {
    // Title
    const [title, setTitle] = useState('');
    // Ingredients
    const [ing, setIng] = useState('');
    const [addedIng, setAddedIng] = useState([]);
    // Cooking time
    const [cookTime, setCookTime] = useState('');
    // Cooking Method
    const [method, setMethod] = useState('');

    const navigate = useNavigate();

    // handle adding ingredients
    const handleIngredientClick = () => {
        setAddedIng([...addedIng, ing]);
        setIng('');
    }

    //handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create object
        const createdSubmission = {
            title,
            ingredients: addedIng,
            method,
            cookingTime: cookTime + " minutes"
        }

        // Attempt to post object to json-server
        try {
            await postData('http://localhost:4000/recipes',createdSubmission);
            // Reset Forms
            resetForms();
            navigate('/');
            console.log('Form submitted successfully.');
        } catch (error) {
            console.error('Failed to submit form: ', error);
        }
    }

    // Handle form Reset
    const resetForms = () => {
        setTitle('');
        setMethod('');
        setIng('');
        setAddedIng([]);
        setCookTime('');
    }


    return (
        <div className="create-page">
            <h2>Test</h2>
            <form>
                <label>
                    <span>Recipe Name</span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>

                <label>
                    <span>Add ingredients</span>
                    <input
                        value={ing}
                        type="text"
                        onChange={(e) => setIng(e.target.value)}
                        className="ingredientsInput"
                    />

                    <button type="button" onClick={handleIngredientClick}>Add</button>
                    <p className="ingTracker">Added ingredients: {addedIng.join(", ")}</p>
                </label>


                <label>
                    <span>Cooking time (in minutes):</span>
                    <input
                        type="text"
                        onChange={(e) => setCookTime(e.target.value)}
                        value={cookTime}
                    />
                </label>

                <label>
                    <span>Cooking method:</span>
                    <textarea
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                    />
                </label>

                <button className="submitBtn" type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Create;