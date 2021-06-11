import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./scss/search.css";
import { useGlobalContext } from "../../context/context";

const Search = () => {
	const { notesList, setFilteredList } = useGlobalContext();
	const [searchTerm, setSearchTerm] = useState("");

	const searchHandler = () => {
		if (searchTerm === "") {
			setFilteredList(notesList);
		} else {
			const searchList = notesList.filter(
				(newNote) =>
					newNote.title.toLowerCase() === searchTerm.toLowerCase() ||
					newNote.detail.toLowerCase() === searchTerm.toLowerCase()
			);

			if (searchList.length > 0) {
				setFilteredList(searchList);
			}
		}
		return;
	};

	useEffect(() => {
		searchHandler();
	}, [searchTerm]);

	return (
		<form>
			<div className="icon-container">
				<AiOutlineSearch className="search-icon" />
			</div>
			<input
				type="text"
				placeholder="Search"
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</form>
	);
};

export default Search;
