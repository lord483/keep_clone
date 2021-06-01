import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import "./scss/createNote.css";
import CreateUpdateForm from "../CreateUpdateForm";
import createNote from "../../services/api/createNote";
import SubmitBtn from "../SubmitBtn";

const CreateNote = () => {
	const {
		setNotesList,
		notesList,
		noteTitle,
		setNoteTitle,
		noteBody,
		setNoteBody,
	} = useGlobalContext();

	const [newNoteId, setNewNoteId] = useState("");
	const [formHeight, setFormHeight] = useState("55px");
	const [placeHolder, setPlaceHolder] = useState("Take a Note...");

	let data = {
		noteData: { title: noteTitle, detail: noteBody },
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		await createNote(data).then((result) => {
			setNewNoteId(result.insertedId);
			return;
		});
		setFormHeight("55px");
		setPlaceHolder("Take a Note...");
		setNotesList([...notesList, { _id: newNoteId, ...data.noteData }]);
		setNoteTitle("");
		setNoteBody("");
		return;
	};

	return (
		<div className="create-form-container" style={{ height: formHeight }}>
			<CreateUpdateForm
				{...{
					setFormHeight,
					setPlaceHolder,
					placeHolder,
				}}
			/>
			<SubmitBtn {...{ submitHandler, text: "Done" }} />
		</div>
	);
};

export default CreateNote;
