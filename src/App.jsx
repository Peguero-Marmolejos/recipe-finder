import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
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
	const [selectedRecipe, setSelectedRecipe] = useState(null);

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

	const handleRecipeClick = (recipe) => {
		setSelectedRecipe(recipe);
		console.log("Selected Recipe:", recipe);
	};

	const handleCloseDetails = () => {
		setSelectedRecipe(null);
	};

	useEffect(() => {
		searchItem && fetchRecipe(searchItem);
	}, [searchItem]);

	console.log("Recipe Searching for", recipes);
	return (
		<div>
			<SearchBar searchRecipe={searchRecipe} />
			{selectedRecipe ?
				<RecipeDetails recipe={selectedRecipe} onClose={handleCloseDetails} />
			:	recipes.length > 0 && (
					<RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
				)
			}
		</div>
	);
}

export default App;
