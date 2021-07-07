import React from "react";
import { useGlobalContext } from "../../context/context";
import Note from "../Note";

const NotesList = () => {
	const { notesList } = useGlobalContext();
	const [selectedId, setSelectedId] = React.useState("");

	return notesList.map((note) => {
		const { _id, history, status } = note;
		let { title, detail } = note;

		const userInputSanitation = () => {
			title = title.replace(/</g, "&lt;");
			title = title.replace(/>/g, "&gt;");
			detail = detail.replace(/</g, "&lt;");
			detail = detail.replace(/>/g, "&gt;");
		};

		userInputSanitation();

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
