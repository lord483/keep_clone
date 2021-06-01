import React from "react";
import "./scss/submitBtn.css";

const SubmitBtn = (props) => {
	const { submitHandler, text } = props;

	return (
		<li
			className="new-note-btn"
			onClick={(e) => {
				submitHandler(e);
			}}
		>
			{text}
		</li>
	);
};

export default SubmitBtn;
