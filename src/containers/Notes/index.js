import React from "react";
import Note from "../../components/Note";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import EmptyPage from "../../components/EmptyPage/EmptyPage";
import CreateNote from "../../components/CreateNote";
import "./notes.css";
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
						{isListEmpty ? <EmptyPage /> : <Note />}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Notes;
