import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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

	const [sidebarWidth, setSidebarWidth] = useState("60px");

	const sidebarStyles = {
		width: sidebarWidth,
		transition: "width 100ms ease-in-out",
	};

	useEffect(() => {
		if (isSidebarOpen) {
			setSidebarWidth("275px");
		} else {
			setSidebarWidth("60px");
		}
	}, [isSidebarOpen]);

	return (
		<div
			className="main-container"
			style={sidebarStyles}
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
