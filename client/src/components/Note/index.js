import React, { useState } from "react";
import NoteBody from "../NoteBody";
import NoteTitle from "../NoteTitle";
import ContextMenu from "../ContextMenu";
import "./scss/note.css";

const Note = ({
	_id,
	title,
	detail,
	selectedId,
	setSelectedId,
	history,
	status,
}) => {
	const [newNoteTitle, setNewNoteTitle] = useState("");
	const [newNoteBody, setNewNoteBody] = useState("");

	const clickHandler = (e, title, detail) => {
		e.preventDefault();
		setSelectedId(_id);
		setNewNoteTitle(title);
		setNewNoteBody(detail);
	};

	return (
		<div
			className={
				_id === selectedId ? "note-container expand" : "note-container"
			}
			key={_id}
			id={_id}
			onClick={(e) => {
				clickHandler(e, title, detail);
			}}
		>
			<NoteTitle {...{ setNewNoteTitle, _id, selectedId, title }} />
			<NoteBody {...{ setNewNoteBody, _id, selectedId, detail }} />
			{_id === selectedId && (
				<ContextMenu
					{...{
						setSelectedId,
						selectedId,
						newNoteTitle,
						newNoteBody,
						history,
						status,
					}}
				/>
			)}
		</div>
	);
};

export default Note;
