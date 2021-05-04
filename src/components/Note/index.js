import React, { useState } from "react";
import { notes } from "../../assets/temp-notes";
import "./note.css";

const Note = () => {
	const [isNoteOpen, setIsNoteOpen] = useState(false);

	return notes.map((note, index) => {
		const { title, detail } = note;
		return (
			<div
				className="container"
				id={index}
				key={index}
				onClick={() => setIsNoteOpen(!isNoteOpen)}
			>
				<NoteContainer title={title} detail={detail} index={index} />
			</div>
		);
	});
};

const NoteContainer = ({ title, detail, index }) => {
	return (
		<div className="note-container" id={index}>
			<div className="note-title">
				<h4>{title}</h4>
			</div>
			<div className="note-detail">
				<p>{detail}</p>
			</div>
		</div>
	);
};

export default Note;
