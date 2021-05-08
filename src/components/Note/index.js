import React from "react";
import { useGlobalContext } from "../../context/context";
import "./note.css";

const Note = () => {
	const {
		// setIsNoteOpen,
		// isNoteOpen,
		// isListEmpty,
		// setIsListEmpty,
		notesList,
		// notes,
	} = useGlobalContext();
	// console.log(notesList);

	return notesList.map((note, index) => {
		const { title, detail } = note;

		return (
			<div
				className="container"
				id={index}
				key={index}
				// onClick={() => setIsNoteOpen(!isNoteOpen)}
			>
				<div className="note-container">
					<div className="note-title">
						<h4>{title}</h4>
					</div>
					<div className="note-detail">
						<p>{detail}</p>
					</div>
				</div>
			</div>
		);
	});
};

export default Note;
