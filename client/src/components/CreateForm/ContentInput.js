import React from "react";

const ContentInput = ({ noteBody, setNoteBody }) => {
	return (
		<React.Fragment>
			<textarea
				placeholder="Take a Note..."
				value={noteBody}
				className="textarea"
				onChange={(e) => setNoteBody(e.target.value)}
			/>
		</React.Fragment>
	);
};

export default ContentInput;
