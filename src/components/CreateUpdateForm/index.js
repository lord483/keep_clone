import React from "react";
import { useGlobalContext } from "../../context/context";
import "./scss/createForm.css";

const CreateUpdateForm = ({ setFormHeight, setPlaceHolder, placeHolder }) => {
	const { noteTitle, setNoteTitle, noteBody, setNoteBody } = useGlobalContext();

	return (
		<div className="form-container">
			<input
				placeholder={placeHolder}
				value={noteTitle}
				className="title-input"
				onChange={(e) => setNoteTitle(e.target.value)}
				onClick={() => {
					setFormHeight("auto");
					setPlaceHolder("Title");
				}}
			/>
			<textarea
				placeholder="Take a Note..."
				value={noteBody}
				className="textarea"
				onChange={(e) => setNoteBody(e.target.value)}
			/>
		</div>
	);
};

export default CreateUpdateForm;
