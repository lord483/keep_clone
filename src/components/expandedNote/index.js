import React from "react";
import { useGlobalContext } from "../../context/context";
import "./expNote.css";

const ExpandedNote = () => {
	const {
		// setIsNoteOpen,
		isNoteOpen,
		// isListEmpty,
		// setIsListEmpty,
		notesList,
		// notes,
		id,
		set_id,
	} = useGlobalContext();
	return notesList.map((foundNote) => {
		if (foundNote._id === id) {
			const { _id, title, detail } = foundNote;
			return (
				<div className="exp-note-container" key={_id}>
					<h2>{title}</h2>
					<p>{detail}</p>
				</div>
			);
		}
	});
};

export default ExpandedNote;
