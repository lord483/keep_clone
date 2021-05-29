import React from "react";
import { useGlobalContext } from "../../context/context";

const CreateUpdateForm = ({ props }) => {
	const { noteTitle, setNoteTitle, noteBody, setNoteBody } = useGlobalContext();

	const { setIsFormExpanded, placeHolder } = props;

	return (
		<div className="form-container">
			<input
				placeholder={placeHolder}
				value={noteTitle}
				className="title-input"
				onChange={(e) => setNoteTitle(e.target.value)}
				onClick={() => {
					setIsFormExpanded(true);
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
