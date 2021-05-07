import React from "react";
import Note from "../../components/Note";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import EmptyPage from "../../components/EmptyPage/EmptyPage";
import "./notes.css";
import { useGlobalContext } from "../../context/context";

const Notes = () => {
	const { isListEmpty } = useGlobalContext();

	return (
		<main>
			<Nav />
			<Sidebar />
			<div className="page-container">
				{isListEmpty ? <EmptyPage /> : <Note />}
			</div>
		</main>
	);
};

export default Notes;
