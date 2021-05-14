import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import "./createNote.css";
import { NoteIcons } from "../../assets/local-data";

const CreateNote = () => {
	const { setNotesList, isListEmpty, notesList } = useGlobalContext();
	const [noteTitle, setNoteTitle] = useState("");
	const [noteBody, setnoteBody] = useState("");

	let data = {
		query: { title: noteTitle, detail: noteBody },
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

	const submitHandler = async (e) => {
		e.preventDefault();
		await putData(data);
		setNotesList([...notesList, data.noteData]);
		setNoteTitle("");
		return;
	};

	return (
		<div className="create-form-container">
			<div className="form-container">
				<input
					placeholder="Title"
					value={noteTitle}
					className="title-input"
					onChange={(e) => setNoteTitle(e.target.value)}
				/>
				<textarea
					placeholder="Title"
					value={noteBody}
					className="textarea"
					onChange={(e) => setnoteBody(e.target.value)}
				/>
			</div>
			<IconContainer data={data} submitHandler={submitHandler} />
		</div>
	);
};

const IconContainer = ({ submitHandler }) => {
	return (
		<ul className="form-btn">
			{NoteIcons.map((newIcon, index) => {
				const { icon } = newIcon;
				return (
					<li key={index} className="icon-item">
						{icon}
					</li>
				);
			})}
			<li className="new-note-btn" onClick={(e) => submitHandler(e)}>
				Done
			</li>
		</ul>
	);
};

export default CreateNote;
