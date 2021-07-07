import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import "./scss/sidebar.css";

const Sidebar = () => {
	const {
		activeId,
		setActiveId,
		SidebarData,
		isSidebarOpen,
		setIsSidebarOpen,
		setType,
	} = useGlobalContext();

	return (
		<div
			className={`${
				isSidebarOpen ? "main-container sidebar-open" : "main-container"
			} `}
			onMouseEnter={() => setIsSidebarOpen(true)}
			onMouseLeave={() => setIsSidebarOpen(false)}
		>
			<Router>
				<ul className="side-container">
					{SidebarData.map((data, index) => {
						const { icon, id, label } = data;
						return (
							<li
								className={`side-item ${id === activeId && "active"}`}
								key={index}
								onClick={() => {
									setActiveId(id);
									setType(label.toLowerCase());
								}}
							>
								{icon} <h4>{label}</h4>
							</li>
						);
					})}
				</ul>
			</Router>
		</div>
	);
};

export default Sidebar;
