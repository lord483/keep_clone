import React from "react";
import { useGlobalContext } from "../../context/context";
import "./note.css";

const Note = () => {
	const { setIsNoteOpen, isNoteOpen, notesList, set_id } = useGlobalContext();

	const idSetter = (e, index) => {
		e.preventDefault();
		set_id(notesList[index]._id);
	};

	return notesList.map((note, index) => {
		const { title, detail } = note;

		return (
			<div
				className="container"
				id={index}
				key={index}
				onClick={(e) => {
					idSetter(e, index);
					setIsNoteOpen(!isNoteOpen);
				}}
			>
				<div className="container"></div>
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
