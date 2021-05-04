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
		icon: <AiOutlineBulb />,
		label: "Notes",
		path: "/",
		// page = <Notes />
	},
	{
		icon: <AiOutlineBell />,
		label: "Reminders",
		path: "/reminder",
		// page = <Reminders />
	},
	{
		icon: <AiOutlineEdit />,
		label: "Edit Labels",
		path: "/labels",
		// page: <Labels />
	},
	{
		icon: <BiArchiveIn />,
		label: "Archive",
		path: "/archive",
		// page: <Archive />
	},
	{
		icon: <BiTrashAlt />,
		label: "Trash",
		path: "/trash",
		// page: <Trash />
	},
];

const NoteIcons = [
	{ icon: <AiOutlinePushpin /> },
	{ icon: <BiBellPlus /> },
	{ icon: <IoPersonAddOutline /> },
	{ icon: <IoColorPaletteOutline /> },
	{ icon: <BiImageAlt /> },
	{ icon: <BiArchiveIn /> },
	{ icon: <BiDotsVerticalRounded /> },
	{ icon: <BiUndo /> },
	{ icon: <BiRedo /> },
];

export { Icons, SidebarData, NoteIcons };
