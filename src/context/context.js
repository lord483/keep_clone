import React, { useContext, useState, useEffect } from "react";
import { SidebarData } from "../assets/local-data";
import { notes } from "../assets/temp-notes";

const AppContext = React.createContext();

// Wrap your root index.js' <App /> component in <AppProvider />

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [sidebarWidth, setSidebarWidth] = useState("60px");
	const [isNoteOpen, setIsNoteOpen] = useState(false);
	const [activeId, setActiveId] = useState(0);
	const [isListEmpty, setIsListEmpty] = useState(true);
	const [notesList, setNotesList] = useState([]);
	const url = "http://localhost:5000/api";

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data) {
				setIsListEmpty(false);
				const newNotes = data.map((note) => {
					const { title, detail } = note;
					return { title, detail };
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

	const sidebarStyles = {
		width: sidebarWidth,
		transition: "width 100ms ease-in-out",
	};

	// useEffect(() => {
	// 	if (notesList.length === 0) {
	// 		setIsListEmpty(true);
	// 	} else {

	// 	}
	// }, [isListEmpty]);

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
				loading,
				notesList,
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
