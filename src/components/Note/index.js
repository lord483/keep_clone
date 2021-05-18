import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import IconContainer from "../IconContainer";
import "./note.css";

const Note = () => {
	const { notesList } = useGlobalContext();
	const [isNoteExpand, setIsNoteExpand] = useState(false);
	const [selectedId, setSelectedId] = useState(0);
	const [noteTitle, setNoteTitle] = useState("");
	const [noteBody, setNoteBody] = useState("");

	useEffect(() => {
		console.log(noteTitle, noteBody);
	}, [noteTitle, noteBody]);

	let data = {
		query: { selectedId },
		noteData: { title: noteTitle, detail: noteBody },
	};

	const putData = async () => {
		try {
			const response = await fetch("/api", {
				method: "POST",
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
				onClick={() => {
					setSelectedId(_id);
					setIsNoteExpand(true);
					setNoteTitle(title);
					setNoteBody(detail);
				}}
			>
				<div
					className="note-title"
					onInput={(e) => console.log(e.target)}
					contentEditable={_id === selectedId && isNoteExpand}
					dangerouslySetInnerHTML={{
						__html: `<h4>${isNoteExpand ? noteTitle : title}</h4>`,
					}}
				></div>
				<div
					className="note-detail"
					onInput={(e) => console.log(e.target)}
					contentEditable={_id === selectedId && isNoteExpand}
					dangerouslySetInnerHTML={{
						__html: `<p>${isNoteExpand ? noteBody : detail}</p>`,
					}}
				></div>
			</div>
		);
	});
};

export default Note;
