import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { SidebarData } from "../../assets/local-data";
import "./sidebar.css";

const Sidebar = ({ setIsSidebarOpen, IsSidebarOpen }) => {
	return (
		<Router>
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
						const { icon, path, label } = data;
						return (
							<li className="side-item" key={index}>
								<Link to={path} className="side-item">
									{icon} <h4>{label}</h4>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</Router>
	);
};

export default Sidebar;
