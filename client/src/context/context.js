import React, { useContext, useState, useEffect } from "react";
import { SidebarData } from "../assets/local-data";

const AppContext = React.createContext();

// Wrap your root index.js' <App /> component in <AppProvider />

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isNoteOpen, setIsNoteOpen] = useState(false);
	const [activeId, setActiveId] = useState(0);
	const [isListEmpty, setIsListEmpty] = useState(true);
	const [notesList, setNotesList] = useState([]);
	const [noteTitle, setNoteTitle] = useState("");
	const [noteBody, setNoteBody] = useState("");
	const [selectedId, setSelectedId] = useState(0);
	const [filteredList, setFilteredList] = useState(notesList);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch("/api");
			const data = await response.json();
			if (data) {
				setIsListEmpty(false);
				const newNotes = data.map((note) => {
					const { _id, title, detail } = note;
					return { _id, title, detail };
				});
				setNotesList(newNotes);
			} else {
				setNotesList([]);
			}
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (notesList.length === 0) {
			setIsListEmpty(true);
		} else {
			setIsListEmpty(false);
		}
	}, [isListEmpty, notesList.length]);

	return (
		<AppContext.Provider
			value={{
				setIsNoteOpen,
				setIsSidebarOpen,
				setNoteTitle,
				setActiveId, // Set Sidebar Tab ID
				setNoteBody,
				setIsListEmpty,
				setNotesList,
				setSelectedId, // Set NoteID from Database
				fetchData,
				isListEmpty,
				isNoteOpen,
				isSidebarOpen,
				activeId, // Sidebar Tab ID
				SidebarData,
				loading,
				notesList,
				noteTitle,
				noteBody,
				selectedId,
				filteredList,
				setFilteredList,
				// NoteID from Database
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
