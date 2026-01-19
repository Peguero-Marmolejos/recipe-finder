function RecipeDetails({ recipe, onClose }) {
	return (
		<div className="container mt-4">
			<button className="btn btn-secondary mb-3" onClick={onClose}>
				Back to Results
			</button>
			<div className="card">
				<img src={recipe.imageURL} alt={recipe.name} className="card-img-top" />
				<div className="card-body">
					<h2 className="card-title">{recipe.name}</h2>
					<p>More details to come..</p>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetails;
