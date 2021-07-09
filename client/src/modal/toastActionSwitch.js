const toastTextSwitch = (toastText, setNotificationText) => {
	switch (toastText) {
		case "notes":
			setNotificationText("Note moved to Notes successfully");
			break;
		case "reminders":
			setNotificationText("Note moved to Reminders successfully");
			break;
		case "archive":
			setNotificationText("Note Archived successfully");
			break;
		case "trash":
			setNotificationText("Note Trashed successfully");
			break;
		case "delete":
			setNotificationText("Note Deleted successfully");
			break;
		case "update":
			setNotificationText("Note Updated successfully");
			break;
		case "trash":
			setNotificationText("Note moved to Trash successfully");
			break;

		default:
			setNotificationText("");
			break;
	}
};

export default toastTextSwitch;
