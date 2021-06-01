import React from "react";
import { useGlobalContext } from "../../context/context";
import Note from "../Note";

const NotesList = () => {
	const { notesList } = useGlobalContext();

	return notesList.map((note, index) => {
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
