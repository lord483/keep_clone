import React from "react";
import "./nav.css";
import { IoMenuSharp } from "react-icons/io5";
import { Icons } from "../../assets/local-data";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/keep_icon.png";
import { useGlobalContext } from "../../context/context";

const Nav = () => {
	const { IsSidebarOpen, setIsSidebarOpen } = useGlobalContext();
	return (
		<nav>
			<div
				className="menu-icon"
				onClick={() => setIsSidebarOpen(!IsSidebarOpen)}
			>
				<IoMenuSharp />
			</div>
			<img src={logo} alt="logo" />
			<h2>Keep</h2>
			<Search className="search-form" />
			<div className="dark-icon-container">
				<Icon />
			</div>
		</nav>
	);
};

const Search = () => {
	return (
		<form>
			<div className="icon-container">
				<AiOutlineSearch className="search-icon" />
			</div>
			<input type="text" placeholder="Search" />
		</form>
	);
};

const Icon = () => {
	return Icons.map((Icon, index) => {
		const { icon } = Icon;
		return (
			<div className="dark-icon" key={index}>
				{icon}
			</div>
		);
	});
};

export default Nav;
