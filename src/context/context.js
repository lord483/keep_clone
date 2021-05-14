import React, { useContext, useState, useEffect } from "react";
import { SidebarData } from "../assets/local-data";

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
	const [id, set_id] = useState(0);

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

	const sidebarStyles = {
		width: sidebarWidth,
		transition: "width 100ms ease-in-out",
	};

	useEffect(() => {
		if (notesList.length === 0) {
			setIsListEmpty(true);
		} else {
			setIsListEmpty(false);
		}
	}, [isListEmpty, notesList.length]);

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
				set_id,
				fetchData,
				setNotesList,
				isListEmpty,
				isNoteOpen,
				isSidebarOpen,
				activeId,
				sidebarStyles,
				SidebarData,
				loading,
				notesList,
				id,
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
