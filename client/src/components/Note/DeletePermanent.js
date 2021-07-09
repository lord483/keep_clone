import React from "react";
import SubmitBtn from "../SubmitBtn";
import deleteNote from "../../services/api/delete";
import { useGlobalContext } from "../../context/context";

const DeletePermanent = ({ selectedId }) => {
	const { notesList, setNotesList, setToastText } = useGlobalContext();

	const deleteHandler = async (e) => {
		e.preventDefault();

		const newNoteList = notesList.filter(
			(deletedNote) => deletedNote._id !== selectedId
		);
		setNotesList(newNoteList);
		await deleteNote({
			query: selectedId,
		});

		await setToastText("Note Deleted successfully");
	};

	return (
		<React.Fragment>
			<SubmitBtn submitHandler={deleteHandler} text={"Delete"} />
		</React.Fragment>
	);
};

export default DeletePermanent;
