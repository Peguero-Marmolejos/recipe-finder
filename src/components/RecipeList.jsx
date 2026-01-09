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
function RecipeList({ recipes }) {
	return (
		<div className="recipe-list">
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
}
export default RecipeList;
