import React from "react";
import Note from "../../components/Note";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import EmptyPage from "../../components/EmptyPage/EmptyPage";
import CreateNote from "../../components/CreateNote";
import "./notes.css";
// import ExpandedNote from "../../components/expandedNote";
import { useGlobalContext } from "../../context/context";

const Notes = () => {
	const { isListEmpty } = useGlobalContext();

	return (
		<main>
			<Nav />
			<Sidebar />

			<div className="page-container">
				<CreateNote />
				{isListEmpty ? <EmptyPage /> : <Note />}
				{/* <ExpandedNote /> */}
			</div>
		</main>
	);
};

export default Notes;
