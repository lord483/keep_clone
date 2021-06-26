import React from "react";
import { useGlobalContext } from "../../context/context";

const EmptyPage = (customText) => {
	const { SidebarData, activeId } = useGlobalContext();
	const { icon, subTitle } = SidebarData[activeId];

	return (
		<div className="page-icon-container">
			{icon || ""}
			<h2 className="empty-subtitle">{subTitle || customText}</h2>
		</div>
	);
};

export default EmptyPage;
