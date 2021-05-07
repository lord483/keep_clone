import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import "./sidebar.css";

const Sidebar = () => {
	const {
		setIsSidebarOpen,
		activeId,
		setActiveId,
		sidebarStyles,
		SidebarData,
	} = useGlobalContext();

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
						const { icon, path, id, label } = data;
						return (
							<li
								className={`side-item ${id === activeId && "active"}`}
								key={index}
								onClick={() => setActiveId(id)}
							>
								<Link to={path} className="side-item">
									{icon} <h4>{label}</h4>
								</Link>
							</li>
						);
					})}
				</ul>
			</Router>
		</div>
	);
};

export default Sidebar;
