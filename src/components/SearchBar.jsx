import { useState } from "react";

function SearchBar({ searchRecipe }) {
	const [textInput, setTextInput] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				searchRecipe(textInput);
				setTextInput("");
			}}>
			<input
				type="string"
				placeholder="Enter a recipe to search..."
				value={textInput}
				onChange={(e) => setTextInput(e.target.value)}
			/>
			<button type="submit">SEARCH</button>
		</form>
	);
}
export default SearchBar;
