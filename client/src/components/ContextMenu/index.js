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
}) => {
	return (
		<div className="context-menu">
			<UpdateNote
				{...{ setSelectedId, selectedId, newNoteTitle, newNoteBody }}
			/>
			<DeletePermanent {...{ selectedId }} />
			<ChangeNoteType {...{ newType: "reminders", history, selectedId }} />
			<ChangeNoteType {...{ newType: "archive", history, selectedId }} />
			<ChangeNoteType {...{ newType: "trash", history, selectedId }} />
			<ChangeNoteType {...{ newType: "notes", history, selectedId }} />
		</div>
	);
};

export default ContextMenu;
