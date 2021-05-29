import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import IconContainer from "../IconContainer";
import "./note.css";

const Note = () => {
	const { notesList, putData, setNotesList } = useGlobalContext();
	const [isNoteExpand, setIsNoteExpand] = useState(false);
	const [selectedId, setSelectedId] = useState("");

	const [newNoteTitle, setNewNoteTitle] = useState("");
	const [newNoteBody, setNewNoteBody] = useState("");

	let data = {
		query: { selectedId },
		noteData: { title: newNoteTitle, detail: newNoteBody },
	};

	const clickHandler = (id, title, detail) => {
		setSelectedId(id);
		setIsNoteExpand(true);
		setNewNoteTitle(title);
		setNewNoteBody(detail);
	};

	const updateNote = async () => {
		try {
			const response = await fetch("/api/update", {
				method: "PUT",
				headers: {
					Accept: "*/*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			return response.json();
		} catch (error) {
			console.error(error);
		}
	};

	const deleteNote = async () => {
		try {
			const response = await fetch("/api/delete", {
				method: "DELETE",
				headers: {
					Accept: "*/*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data.query),
			});
			return response.json();
		} catch (error) {
			console.error(error);
		}
	};

	const updateHandler = async (e) => {
		e.preventDefault();
		await updateNote(data);
		setIsNoteExpand(false);
	};

	const deleteHandler = async (e) => {
		e.preventDefault();
		await deleteNote(data);
		setNotesList(() =>
			notesList.filter((deletedNote) => deletedNote._id !== selectedId)
		);

		setIsNoteExpand(false);
		return;
	};

	return notesList.map((note, index) => {
		const { _id, title, detail } = note;

		return (
			<div
				className={
					_id === selectedId && isNoteExpand
						? "note-container expand"
						: "note-container"
				}
				key={index}
				id={_id}
				onClick={() => clickHandler(_id, title, detail)}
			>
				<div
					className="note-title"
					onInput={(e) => {
						setNewNoteTitle(e.target.textContent);
					}}
					contentEditable={_id === selectedId && isNoteExpand}
					dangerouslySetInnerHTML={{
						__html: `<h4>${title}</h4>`,
					}}
				></div>
				<div
					className="note-detail"
					onInput={(e) => {
						setNewNoteBody(e.target.textContent);
					}}
					contentEditable={_id === selectedId && isNoteExpand}
					dangerouslySetInnerHTML={{
						__html: `<p>${detail}</p>`,
					}}
				></div>
				{isNoteExpand && _id === selectedId && (
					<button onClick={(e) => updateHandler(e)}>Done</button>
				)}
				{isNoteExpand && _id === selectedId && (
					<button onClick={(e) => deleteHandler(e)}>Delete</button>
				)}
			</div>
		);
	});
};

export default Note;
