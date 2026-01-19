/**
 * RecipeCard COMPONENT
 *
 *
 * **/
function RecipeCard({ recipe, onClick }) {
	return (
		<div className="col-md-4 col mb-4">
			<div className="card h-100 shadow-md" onClick={() => onClick(recipe)}>
				<div>
					<h2>{recipe.name}</h2>
				</div>

				<img
					src={recipe.imageURL}
					alt={recipe.name}
					className="card-img-bottom"
					style={{ height: "200px", objectFit: "cover" }}
				/>
			</div>
		</div>
	);
}

export default RecipeCard;
