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
		subTitle: "Notes you add appear here",
	},
	{
		id: 1,
		icon: <AiOutlineBell />,
		label: "Reminders",
		subTitle: "Notes with upcoming reminders appear here",
	},

	{
		id: 2,
		icon: <BiArchiveIn />,
		label: "Archive",
		subTitle: "Your archived notes appear here",
	},
	{
		id: 3,
		icon: <BiTrashAlt />,
		label: "Trash",
		subTitle: "No notes in trash",
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
