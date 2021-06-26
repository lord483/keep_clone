import React from "react";
import UpdateNote from "../Note/Update";
import DeletePermanent from "../Note/DeletePermanent";
import ChangeNoteType from "../Note/ChangeNoteType";
import "./scss/contextMenu.css";

const ContextMenu = ({
	setSelectedId,
	selectedId,
	newNoteTitle,
	newNoteBody,
	history,
	status,
}) => {
	return (
		<div className="context-menu">
			<UpdateNote
				{...{ setSelectedId, selectedId, newNoteTitle, newNoteBody }}
			/>
			<DeletePermanent {...{ selectedId }} />
			<ChangeNoteType
				{...{ newType: "reminders", history, status, selectedId }}
			/>
			<ChangeNoteType
				{...{ newType: "archive", history, status, selectedId }}
			/>
			<ChangeNoteType {...{ newType: "trash", history, status, selectedId }} />
			<ChangeNoteType {...{ newType: "notes", history, status, selectedId }} />
		</div>
	);
};

export default ContextMenu;
