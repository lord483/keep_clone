import React, { useState } from "react";

const SearchInput = ({ setSearchTerm, searchTerm }) => {
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
