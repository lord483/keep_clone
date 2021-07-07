import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import "./scss/createNote.css";
import CreateUpdateForm from "../CreateForm";
import createNote from "../../services/api/createNote";
import SubmitBtn from "../SubmitBtn";

const CreateNote = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const [noteBody, setNoteBody] = useState("");
	const [isFormOpen, setIsFormOpen] = useState(false);

	const { setNotesList, notesList, type } = useGlobalContext();

	let data = {
		noteData: {
			title: noteTitle,
			detail: noteBody,
			history: [type],
			status: type,
			createdOn: new Date().toLocaleString(),
		},
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		console.log(data);
		createNote(data).then((result) => {
			setNotesList([...notesList, result.insertedNote]);
		});

		setIsFormOpen(false);
		setNoteTitle("");
		setNoteBody("");
	};

	const clickHandler = () => setIsFormOpen(false);

	return (
		<div
			className={
				isFormOpen ? "create-form-container form-open" : "create-form-container"
			}
		>
			<CreateUpdateForm
				{...{
					setIsFormOpen,
					isFormOpen,
					noteTitle,
					setNoteTitle,
					noteBody,
					setNoteBody,
				}}
			/>
			<div className="note-btn-container">
				<SubmitBtn {...{ submitHandler, text: "Done" }} />
				<SubmitBtn {...{ submitHandler: clickHandler, text: "Close" }} />
			</div>
		</div>
	);
};

export default CreateNote;
