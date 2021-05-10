import React from "react";
import { useGlobalContext } from "../../context/context";

const EmptyPage = () => {
	const { SidebarData, activeId } = useGlobalContext();
	const { icon, subTitle } = SidebarData[activeId];

	return (
		<div className="page-icon-container">
			{icon}
			<h2 className="empty-subtitle">{subTitle}</h2>
		</div>
	);
};

export default EmptyPage;
