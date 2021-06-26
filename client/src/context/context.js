import React, { useContext, useState, useEffect } from "react";
import { SidebarData } from "../assets/local-data";
import fetchData from "../services/api/fetchData";

const AppContext = React.createContext();

// Wrap your root index.js' <App /> component in <AppProvider />

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [activeId, setActiveId] = useState(0);
	const [notesList, setNotesList] = useState([]);
	const [filteredList, setFilteredList] = useState(notesList);
	const [type, setType] = useState("notes");

	useEffect(() => {
		fetchData(type).then((result) => setNotesList(result));
	}, [type]);

	return (
		<AppContext.Provider
			value={{
				setIsSidebarOpen,
				setActiveId, // Set Sidebar Tab ID
				setFilteredList,
				setNotesList,
				setType,
				isSidebarOpen,
				activeId, // Sidebar Tab ID
				SidebarData,
				notesList,
				filteredList,
				type,
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
