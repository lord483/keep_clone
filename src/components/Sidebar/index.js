import React, { createRef, useEffect, useRef } from "react";
import { SidebarData } from "../../assets/local-data";
import "./sidebar.css";

const Sidebar = ({ setIsSidebarOpen, IsSidebarOpen }) => {
	return (
		<div
			className="main-container"
			style={
				IsSidebarOpen
					? { width: "275px", transition: "width 100ms ease-in-out" }
					: { width: "60px", transition: "width 100ms ease-in-out" }
			}
			onMouseEnter={() => setIsSidebarOpen(true)}
			onMouseLeave={() => setIsSidebarOpen(false)}
		>
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
