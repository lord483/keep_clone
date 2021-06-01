import React from "react";
import { Icons } from "../../assets/local-data";
import "./scss/menuIcons.css";

const MenuIcons = () => {
	return Icons.map((Icon, index) => {
		const { icon } = Icon;
		return (
			<div className="dark-icon" key={index}>
				{icon}
			</div>
		);
	});
};

export default MenuIcons;
