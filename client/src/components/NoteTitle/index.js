import React from "react";

const NoteTitle = ({ setNewNoteTitle, _id, selectedId, title }) => {
	return (
		<div
			className="note-title"
			onInput={(e) => {
				setNewNoteTitle(e.target.textContent);
			}}
			contentEditable={_id === selectedId}
			dangerouslySetInnerHTML={{
				__html: `<h4>${title}</h4>`,
			}}
		></div>
	);
};

export default NoteTitle;
