import React from "react";
import { useGlobalContext } from "../../context/context";
import Note from "../Note";

const NotesList = () => {
	const { notesList } = useGlobalContext();
	const [selectedId, setSelectedId] = React.useState("");

	return notesList.map((note) => {
		const { _id, title, detail, history, status } = note;

		return (
			<Note
				key={_id}
				{...{
					_id,
					title,
					detail,
					selectedId,
					setSelectedId,
					history,
					status,
				}}
			/>
		);
	});
};

export default NotesList;
