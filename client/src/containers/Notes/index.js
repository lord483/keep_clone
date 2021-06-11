import React from "react";
import NotesList from "../../components/NotesLists";
import Nav from "../Nav";
import Sidebar from "../Sidebar";
import EmptyPage from "../EmptyPage/EmptyPage";
import CreateNote from "../../components/CreateNote";
import "./scss/notes.css";
import { useGlobalContext } from "../../context/context";

const Notes = () => {
	const { isListEmpty } = useGlobalContext();

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
						{isListEmpty ? <EmptyPage /> : <NotesList />}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Notes;
