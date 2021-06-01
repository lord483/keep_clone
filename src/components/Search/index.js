import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./scss/search.css";
const Search = () => {
	return (
		<form>
			<div className="icon-container">
				<AiOutlineSearch className="search-icon" />
			</div>
			<input type="text" placeholder="Search" />
		</form>
	);
};

export default Search;
