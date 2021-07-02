import React from "react";
import { useGlobalContext } from "../../context/context";

const SearchInput = () => {
	const { setSearchTerm, searchTerm } = useGlobalContext();
	return (
		<React.Fragment>
			<input
				type="text"
				value={searchTerm}
				placeholder="Search"
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</React.Fragment>
	);
};

export default SearchInput;
