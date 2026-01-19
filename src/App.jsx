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
		fetchRecipeDetails(recipe.id);
	};

	const handleCloseDetails = () => {
		setSelectedRecipe(null);
	};

	const fetchRecipeDetails = (recipeId) => {
		const detailURL = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;
		fetch(detailURL)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log("Full Recipe Data:", data);
				console.log("Instructions type:", typeof data.instructions);
				console.log("Instructions content:", data.instructions);

				setSelectedRecipe({
					id: data.id,
					name: data.title,
					imageURL: data.image,
					instructions: data.instructions,
					ingredients: data.extendedIngredients,
					readyInMinutes: data.readyInMinutes,
					servings: data.servings,
				});
			})
			.catch((error) => {
				console.error("Error fetching recipe details:", error);
			});
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
