import React, { useContext, useState, useEffect } from "react";
import { SidebarData } from "../assets/local-data";
import getData from "./getData";
const AppContext = React.createContext();

// Wrap your root index.js' <App /> component in <AppProvider />

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [activeId, setActiveId] = useState(0);
	const [notesList, setNotesList] = useState([]);
	const [filteredList, setFilteredList] = useState(notesList);
	const [type, setType] = useState("notes");
	const [searchTerm, setSearchTerm] = React.useState("");
	const [toastText, setToastText] = useState("");

	useEffect(() => {
		let reqData = {};
		if (searchTerm) {
			reqData = {
				searchQuery: searchTerm,
			};
		} else {
			reqData = {
				noteType: type,
			};
		}

		getData(reqData)
			.then((result) => setNotesList(result))
			.catch((error) => console.log(error));
	}, [type, searchTerm]);

	return (
		<AppContext.Provider
			value={{
				setIsSidebarOpen,
				setActiveId, // Set Sidebar Tab ID
				setFilteredList,
				setNotesList,
				setType,
				setSearchTerm,
				setToastText,
				isSidebarOpen,
				activeId, // Sidebar Tab ID
				notesList,
				filteredList,
				type,
				searchTerm,
				toastText,
				SidebarData,
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
