import {useLocation} from "react-router-dom";
import {useFetch} from "../../API/useFetch";
import Recipes from "../Recepies/Recipes";

import './Search.css'

function Search() {
    const querySearch = useLocation().search
    const queryParams = new URLSearchParams(querySearch);
    const query = queryParams.get('q');

    const url = 'http://localhost:4000/recipes?q=' + query
    const {data, isPending, error} = useFetch(url);

    console.log(data)

    return (
        <div className="search-page">
            <h2>Recipes including: {query}</h2>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <Recipes recipes={data} />}
            <p>If search worked, data would be displayed here:</p>
        </div>
    );
}

export default Search;
