import React from "react";
import SubmitBtn from "../SubmitBtn";
import { useGlobalContext } from "../../context/context";
import updateNote from "../../services/api/update";
import fetchData from "../../services/api/fetchData";

const ChangeNoteType = ({ newType, history, selectedId }) => {
	const { setNotesList } = useGlobalContext();
	let data = {
		query: { selectedId },
		noteData: {
			status: newType,
			history: history,
		},
	};

	const typeChangeaHandler = async (e) => {
		e.preventDefault();
		const tempHistory = data.noteData.history;
		await updateNote(data);
		const result = await fetchData(tempHistory[tempHistory.length - 1]);
		setNotesList(result);
	};

	return (
		<React.Fragment>
			<SubmitBtn submitHandler={typeChangeaHandler} text={newType} />
		</React.Fragment>
	);
};

export default ChangeNoteType;
