import React from "react";
import "./scss/createForm.css";
import TitleInput from "./TitleInput";
import ContentInput from "./ContentInput";

const CreateForm = ({
	noteTitle,
	setNoteTitle,
	noteBody,
	setNoteBody,
	setIsFormOpen,
	isFormOpen,
}) => {
	const [placeHolder, setPlaceHolder] = React.useState("Take a Note...");

	React.useEffect(() => {
		isFormOpen && setPlaceHolder("Title");
	}, [isFormOpen]);

	return (
		<div className="form-container">
			<TitleInput
				{...{ noteTitle, setNoteTitle, setIsFormOpen, placeHolder }}
			/>
			<ContentInput {...{ noteBody, setNoteBody }} />
		</div>
	);
};

export default CreateForm;
