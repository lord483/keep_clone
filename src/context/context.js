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
	const [noteTitle, setNoteTitle] = useState("");
	const [noteBody, setNoteBody] = useState("");
	const [isFormExpanded, setIsFormExpanded] = useState(false);
	const [placeHolder, setPlaceHolder] = useState("Take a Note...");
	const [formHeight, setFormHeight] = useState("55px");
	const [selectedId, setSelectedId] = useState(0);

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
				setNoteTitle,
				setActiveId,
				setNoteBody,
				setIsListEmpty,
				setIsFormExpanded,
				set_id,
				setPlaceHolder,
				fetchData,
				setFormHeight,
				setNotesList,
				setSelectedId,
				isListEmpty,
				isNoteOpen,
				isSidebarOpen,
				activeId,
				sidebarStyles,
				SidebarData,
				loading,
				notesList,
				id,
				noteTitle,
				noteBody,
				isFormExpanded,
				placeHolder,
				formHeight,
				selectedId,
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
