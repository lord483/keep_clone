import React from "react";

const TitleInput = ({
	noteTitle,
	setNoteTitle,
	setIsFormOpen,
	placeHolder,
}) => {
	return (
		<React.Fragment>
			<input
				placeholder={placeHolder}
				value={noteTitle}
				className="title-input"
				onChange={(e) => setNoteTitle(e.target.value)}
				onClick={() => {
					setIsFormOpen(true);
				}}
			/>
		</React.Fragment>
	);
};

export default TitleInput;
