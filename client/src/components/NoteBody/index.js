import React from "react";
import "./scss/noteBody.css";

const NoteBody = ({ setNewNoteBody, _id, selectedId, detail }) => {
	return (
		<div
			className="note-detail"
			onInput={(e) => {
				setNewNoteBody(e.target.textContent);
			}}
			contentEditable={_id === selectedId}
			dangerouslySetInnerHTML={{
				__html: `<p>${detail}</p>`,
			}}
		></div>
	);
};

export default NoteBody;
