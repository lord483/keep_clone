import React, { useContext, useState, useEffect } from "react";
import { SidebarData } from "../assets/local-data";
import { notes } from "../assets/temp-notes";

const AppContext = React.createContext();

// Find fetch function here

// async function getData(url = "") {
// 	// Default options are marked with *
// 	const response = await fetch(url, {
// 		method: "GET", // *GET, POST, PUT, DELETE, etc.
// 		mode: "no-cors", // no-cors, *cors, same-origin
// 		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
// 		credentials: "omit", // include, *same-origin, omit
// 	});
// 	return response; // parses JSON response into native JavaScript objects
// }

// console.log(getData("http://localhost:5000/api"));
// Wrap your root index.js' <App /> component in <AppProvider />

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [sidebarWidth, setSidebarWidth] = useState("60px");
	const [isNoteOpen, setIsNoteOpen] = useState(false);
	const [activeId, setActiveId] = useState(0);
	const [isListEmpty, setIsListEmpty] = useState(true);

	const sidebarStyles = {
		width: sidebarWidth,
		transition: "width 100ms ease-in-out",
	};

	useEffect(() => {
		if (notes.length === 0) {
			setIsListEmpty(true);
		} else {
			setIsListEmpty(false);
		}
	}, [isListEmpty]);

	useEffect(() => {
		if (isSidebarOpen) {
			setSidebarWidth("275px");
		} else {
			setSidebarWidth("60px");
		}
	}, [isSidebarOpen]);

	return (
		<AppContext.Provider
			value={{
				setIsNoteOpen,
				setIsSidebarOpen,
				setActiveId,
				setIsListEmpty,
				isListEmpty,
				isNoteOpen,
				isSidebarOpen,
				activeId,
				sidebarStyles,
				SidebarData,
				notes,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
