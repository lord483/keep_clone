import React from "react";
import SubmitBtn from "../SubmitBtn";
import { useGlobalContext } from "../../context/context";
import updateNote from "../../services/api/update";

const UpdateNote = ({
	setSelectedId,
	selectedId,
	newNoteTitle,
	newNoteBody,
}) => {
	const { setToastText } = useGlobalContext();
	const updateHandler = async (e) => {
		let data = {
			query: { selectedId },
			noteData: {
				title: newNoteTitle,
				detail: newNoteBody,
			},
		};
		e.preventDefault();
		await updateNote(data);
		setSelectedId("");
		await setToastText("Note Updated successfully");
	};

	return (
		<React.Fragment>
			<SubmitBtn submitHandler={updateHandler} text={"Update"} />
		</React.Fragment>
	);
};

export default UpdateNote;
