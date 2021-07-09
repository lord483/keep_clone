import React from "react";
import NotesList from "../../components/NotesLists";
import Nav from "../Nav";
import Sidebar from "../Sidebar";
import EmptyPage from "../EmptyPage/EmptyPage";
import CreateNote from "../../components/CreateNote";
import "./scss/notes.css";
import { useGlobalContext } from "../../context/context";
import ActionNotifier from "../../modal/ActionNotifier";

const Notes = () => {
	const { notesList } = useGlobalContext();
	

	return (
		<main className="page-body-container">
			<div className="nav-panel">
				<Nav />
			</div>
			<div className="main-body">
				<div className="side-panel">
					<Sidebar />
				</div>
				<div className="main-panel">
					<CreateNote />
					<div className="secondary-section">
						{notesList.length === 0 ? <EmptyPage /> : <NotesList />}
					</div>
				</div>
			</div>
			
				<ActionNotifier />
			
		</main>
	);
};

export default Notes;
