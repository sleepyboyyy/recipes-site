import React from 'react';
import {useFetch} from "../API/useFetch";
import Recipes from "./Recepies/Recipes";

function Home() {
    const {data, isPending, error} = useFetch('http://localhost:4000/recipes');

    return (
        <div>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <Recipes recipes={data}/> }
        </div>
    );
}

export default Home;