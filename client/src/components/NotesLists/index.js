import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import Note from "../Note";

const NotesList = () => {
	const { notesList, filteredList } = useGlobalContext();
	const [currentList, setCurrentList] = useState([]);

	useEffect(() => {
		if (filteredList.length > 0) {
			setCurrentList(filteredList);
		} else {
			setCurrentList(notesList);
		}
	}, [filteredList, currentList]);

	return currentList.map((note, index) => {
		const { _id, title, detail } = note;

		return (
			<Note
				key={index}
				{...{
					_id,
					title,
					detail,
				}}
			/>
		);
	});
};

export default NotesList;
