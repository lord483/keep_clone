import React from "react";
import { SidebarData } from "../../assets/local-data";
import "./sidebar.css";

const Sidebar = ({ setIsSidebarOpen, IsSidebarOpen }) => {
	return (
		<div className={IsSidebarOpen ? "main-container" : "hidden main-container"}>
			<ul className="side-container">
				{SidebarData.map((data, index) => {
					const { icon, label } = data;
					return (
						<li className="side-item" key={index}>
							{icon} <h4>{label}</h4>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
