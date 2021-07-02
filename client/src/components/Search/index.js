import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./scss/search.css";
import SearchInput from "./SearchInput";

const Search = () => {
	return (
		<form>
			<div className="icon-container">
				<AiOutlineSearch className="search-icon" />
			</div>
			<SearchInput />
		</form>
	);
};

export default Search;
