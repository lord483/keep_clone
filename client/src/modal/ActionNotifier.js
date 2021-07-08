import React from "react";
import "./scss/notifier.css";

const ActionNotifier = ({ toastNotificationText }) => {
	return (
		<div className="notifier-container">
			<p className="notification">
				Note moved to {toastNotificationText} successfully
			</p>
		</div>
	);
};

export default ActionNotifier;
