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

	// useEffect(() => {
	// 	if (!searchTerm) {
	// 		fetchData(
	// 			JSON.stringify({
	// 				noteType: type,
	// 			})
	// 		)
	// 			.then((result) => setNotesList(result))
	// 			.catch((error) => console.log(error));
	// 	} else {
	// 		fetchData(
	// 			JSON.stringify({
	// 				searchQuery: searchTerm,
	// 			})
	// 		)
	// 			.then((result) => setNotesList(result))
	// 			.catch((error) => console.log(error));
	// 	}
	// }, [searchTerm]);

	return (
		<AppContext.Provider
			value={{
				setIsSidebarOpen,
				setActiveId, // Set Sidebar Tab ID
				setFilteredList,
				setNotesList,
				setType,
				setSearchTerm,
				isSidebarOpen,
				activeId, // Sidebar Tab ID
				SidebarData,
				notesList,
				filteredList,
				type,
				searchTerm,
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
