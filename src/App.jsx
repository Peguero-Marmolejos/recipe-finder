import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import "./App.css";

/**
 * App COMPONENT
 *
 *
 * @returns
 */

function App() {
	const [searchItem, setSearchItem] = useState("");
	const [recipes, setRecipes] = useState([]);

	const apiKey = import.meta.env.VITE_API_KEY;
	console.log("API Key:", apiKey);
	const searchRecipe = (recipe) => {
		setSearchItem(recipe);
	};

	const fetchRecipe = (searchItem) => {
		const recipeURL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchItem}&apiKey=${apiKey}&number=25`;
		fetch(recipeURL)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log("API Response:", data);
				const recipeArray = data.results.map((food) => ({
					id: food.id,
					name: food.title,
					imageURL: food.image,
				}));
				setRecipes(recipeArray);
				searchRecipe("");
			})
			.catch((error) => {
				console.error("Error fetching recipes:", error);
				setSearchItem("");
			});
	};

	useEffect(() => {
		searchItem && fetchRecipe(searchItem);
	}, [searchItem]);
	console.log("Recipe Searching for", recipes);
	return (
		<div>
			<SearchBar searchRecipe={searchRecipe} />
			{recipes.length > 0 && <RecipeList recipes={recipes} />}
		</div>
	);
}

export default App;
