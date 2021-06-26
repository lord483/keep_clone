import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./scss/search.css";
import SearchInput from "./SearchInput";
import searchFilter from "../../services/local/searchFilter";

const Search = () => {
	const [searchTerm, setSearchTerm] = React.useState("");

	return (
		<form
			onSubmit={() => {
				searchFilter(searchTerm);
			}}
		>
			<div className="icon-container">
				<AiOutlineSearch className="search-icon" />
			</div>
			<SearchInput {...{ setSearchTerm, searchTerm }} />
		</form>
	);
};

export default Search;
