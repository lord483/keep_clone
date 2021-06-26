import React from "react";
import "./scss/nav.css";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../../assets/keep_icon.png";
import Search from "../../components/Search";
import MenuIcons from "../../components/MenuIcons";
import { useGlobalContext } from "../../context/context";

const Nav = () => {
	const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

	return (
		<nav>
			<div
				className="menu-icon"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				<IoMenuSharp />
			</div>
			<img src={logo} alt="logo" />
			<h2>Keep</h2>
			<Search className="search-form" />
			<div className="dark-icon-container">
				<MenuIcons />
			</div>
		</nav>
	);
};

export default Nav;
