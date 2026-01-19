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
					{recipe.readyInMinutes && (
						<p>Ready in {recipe.readyInMinutes} minutes</p>
					)}
					{recipe.servings && <p>Serves {recipe.servings} servings</p>}
					<h4>Ingredients:</h4>
					{recipe.ingredients && (
						<div>
							<div className="mb-4">
								{recipe.ingredients.map((ingredient) => (
									<div
										key={`ingredient-${ingredient.id}`}
										className="list-group-item">
										{ingredient.original}
									</div>
								))}
							</div>
						</div>
					)}
					<h4 className="mt-4">Instructions:</h4>
					<div className="card p-3">
						{recipe.instructions ?
							<div
								dangerouslySetInnerHTML={{ __html: recipe.instructions }}
								style={{
									lineHeight: "1.5",
									fontSize: "16px",
								}}
							/>
						:	<p>No instructions available.</p>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetails;
