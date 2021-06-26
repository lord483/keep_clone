import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import Note from "../Note";

const NotesList = () => {
	const { notesList } = useGlobalContext();
	const [selectedId, setSelectedId] = useState("");

	return notesList.map((note, index) => {
		const { _id, title, detail, history, status } = note;

		return (
			<React.Fragment>
				<Note
					key={index}
					{...{
						_id,
						title,
						detail,
						selectedId,
						setSelectedId,
						history,
						status,
					}}
				/>
			</React.Fragment>
		);
	});
};

export default NotesList;
