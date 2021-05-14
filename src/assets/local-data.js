import {
	IoRefreshOutline,
	IoListSharp,
	IoSettingsOutline,
	IoPersonAddOutline,
	IoColorPaletteOutline,
	// IoMdCheckboxOutline,
} from "react-icons/io5";

import {
	AiOutlineBulb,
	AiOutlineBell,
	AiOutlineEdit,
	AiOutlinePushpin,
} from "react-icons/ai";
import {
	BiArchiveIn,
	BiTrashAlt,
	BiBellPlus,
	BiImageAlt,
	BiDotsVerticalRounded,
	BiUndo,
	BiRedo,
} from "react-icons/bi";

// nav icons
const Icons = [
	{ icon: <IoRefreshOutline /> },
	{ icon: <IoListSharp /> },
	{ icon: <IoSettingsOutline /> },
];

//sidebar icons and labels
const SidebarData = [
	{
		id: 0,
		icon: <AiOutlineBulb />,
		label: "Notes",
		subTitle: "Note you add appear here",
		path: "/",
		// page = <Notes />
	},
	{
		id: 1,
		icon: <AiOutlineBell />,
		label: "Reminders",
		subTitle: "Note with upcoming reminders appear here",
		path: "/reminder",
		// page = <Reminders />
	},
	{
		id: 2,
		icon: <AiOutlineEdit />,
		label: "Edit Labels",
		subTitle: "No labels yet",
		path: "/labels",
		// page: <Labels />
	},
	{
		id: 3,
		icon: <BiArchiveIn />,
		label: "Archive",
		subTitle: "Your archived notes appear here",
		path: "/archive",
		// page: <Archive />
	},
	{
		id: 4,
		icon: <BiTrashAlt />,
		label: "Trash",
		subTitle: "No notes in trash",
		path: "/trash",
		// page: <Trash />
	},
];

const NoteIcons = [
	{ icon: <BiBellPlus /> },
	{ icon: <IoPersonAddOutline /> },
	{ icon: <IoColorPaletteOutline /> },
	{ icon: <BiImageAlt /> },
	{ icon: <BiArchiveIn /> },
	{ icon: <BiDotsVerticalRounded /> },
	{ icon: <BiUndo /> },
	{ icon: <BiRedo /> },
	{ icon: <AiOutlinePushpin /> },
];

export { Icons, SidebarData, NoteIcons };
