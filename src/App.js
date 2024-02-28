import './App.css';
// React Router
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, RouterProvider,

} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import RecipeDetails, {recipeDetailLoader} from "./pages/Recepies/RecipeDetails";
import Create from "./pages/Create";
import Search from "./pages/Search/Search";
import Home from "./pages/Home";
import {useTheme} from "./API/useTheme";

//Done Recipe components
//Done Create recipe page (Adding a list of ingredients*)
//Done Recipe details page
//Done add searchbar and behaviour

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route
                index
                element={<Home />}
            />
            <Route
                path=":id"
                element={<RecipeDetails />}
                loader={recipeDetailLoader}
            />
            <Route
                path="create"
                element={<Create />}
            />
            <Route
                path="search"
                element={<Search />}
            />
        </Route>
    )
)

function App() {
    const { mode } = useTheme();

    return (
        <div className={`app ${mode}`}>
            <RouterProvider router={router}/>
        </div>

    );
}

export default App;
