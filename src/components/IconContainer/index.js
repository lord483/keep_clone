import React from "react";

const IconContainer = ({ NoteIcons, submitHandler, setIsFormExpanded }) => {
	return (
		<ul className="form-btn">
			{NoteIcons.map((noteIcon, index) => {
				const { icon } = noteIcon;
				return (
					<li key={index} className="icon-item">
						{icon}
					</li>
				);
			})}
			<li
				className="new-note-btn"
				onClick={(e) => {
					submitHandler(e);
					setIsFormExpanded(false);
				}}
			>
				Done
			</li>
		</ul>
	);
};

export default IconContainer;
