/**
 * RecipeCard COMPONENT
 *
 *
 * **/
function RecipeCard({ recipe }) {
	return (
		<div className="recipe-card">
			<h2>{recipe.name}</h2>
			<img src={recipe.imageURL} alt={recipe.name} />
		</div>
	);
}

export default RecipeCard;
