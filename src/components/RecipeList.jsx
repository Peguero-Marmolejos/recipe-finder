import RecipeCard from "./RecipeCard";
/**
 * RecipeList COMPONENT
 *
 * This component renders a list of RecipeCard components.
 * It expects an array of recipe objects as a prop.
 *
 * @param {Array} recipes - An array of recipe objects to be displayed.
 *
 * @returns {JSX.Element} A list of RecipeCard components.
 * */
function RecipeList({ recipes, onRecipeClick }) {
	return (
		<div className="container mt-4">
			<div className="row">
				{recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} onClick={onRecipeClick} />
				))}
			</div>
		</div>
	);
}
export default RecipeList;
