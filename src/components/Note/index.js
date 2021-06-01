import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import updateNote from "../../services/api/update";
import deleteNote from "../../services/api/delete";
import SubmitBtn from "../SubmitBtn";
import NoteBody from "../NoteBody";
import NoteTitle from "../NoteTitle";
import "./scss/note.css";

const Note = ({ _id, title, detail }) => {
	const { notesList, setNotesList, selectedId, setSelectedId } =
		useGlobalContext();

	const [newNoteTitle, setNewNoteTitle] = useState("");
	const [newNoteBody, setNewNoteBody] = useState("");

	let data = {
		query: { selectedId },
		noteData: { title: newNoteTitle, detail: newNoteBody },
	};

	const clickHandler = (e, id, title, detail) => {
		e.preventDefault();
		setSelectedId(id);
		setNewNoteTitle(title);
		setNewNoteBody(detail);
	};

	const updateHandler = async (e) => {
		e.preventDefault();
		await updateNote(data);
		setSelectedId("");
	};

	const deleteHandler = async (e) => {
		e.preventDefault();
		const newNoteList = notesList.filter(
			(deletedNote) => deletedNote._id !== selectedId
		);
		setNotesList(newNoteList);
		await deleteNote(data);
	};

	return (
		<div
			className={
				_id === selectedId ? "note-container expand" : "note-container"
			}
			id={_id}
			onClick={(e) => clickHandler(e, _id, title, detail)}
		>
			<NoteTitle {...{ setNewNoteTitle, _id, selectedId, title }} />
			<NoteBody {...{ setNewNoteBody, _id, selectedId, detail }} />
			{_id === selectedId && (
				<div className="note-btn-container">
					<SubmitBtn submitHandler={updateHandler} text={"Update"} />
					<SubmitBtn submitHandler={deleteHandler} text={"Delete"} />
				</div>
			)}
		</div>
	);
};

export default Note;
