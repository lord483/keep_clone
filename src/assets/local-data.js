import {
	IoRefreshOutline,
	IoListSharp,
	IoSettingsOutline,
} from "react-icons/io5";

import { AiOutlineBulb, AiOutlineBell, AiOutlineEdit } from "react-icons/ai";
import { BiArchiveIn, BiTrashAlt } from "react-icons/bi";

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
	},
	{ icon: <AiOutlineBell />, label: "Reminders" },
	{
		icon: <AiOutlineEdit />,
		label: "Edit Labels",
	},
	{ icon: <BiArchiveIn />, label: "Archive" },
	{ icon: <BiTrashAlt />, label: "Trash" },
];

export { Icons, SidebarData };
