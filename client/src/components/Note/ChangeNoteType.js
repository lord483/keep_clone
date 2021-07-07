import React from "react";
import SubmitBtn from "../SubmitBtn";
import { useGlobalContext } from "../../context/context";
import updateNote from "../../services/api/update";
import getData from "../../context/getData";

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
		const result = await getData({
			noteType: tempHistory[tempHistory.length - 1],
		});
		await setNotesList(result);
	};

	return (
		<React.Fragment>
			<SubmitBtn submitHandler={typeChangeaHandler} text={newType} />
		</React.Fragment>
	);
};

export default ChangeNoteType;
