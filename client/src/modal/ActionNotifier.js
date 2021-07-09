import React from "react";
import "./scss/notifier.css";
import { useGlobalContext } from "../context/context";

const ActionNotifier = () => {
	const { toastText } = useGlobalContext();

	const [toastNotificationVisible, setToastNotificationVisible] =
		React.useState(false);

	React.useEffect(() => {
		setToastNotificationVisible(true);
		setTimeout(() => {
			setToastNotificationVisible(false);
		}, 2000);
	}, [toastText]);

	return (
		toastText &&
		toastNotificationVisible && (
			<div className="notifier-container">
				<p className="notification">{toastText}</p>
			</div>
		)
	);
};

export default ActionNotifier;
