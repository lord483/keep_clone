import { useState } from "react";
// import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
	const [IsSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<main>
			<Nav setIsSidebarOpen={setIsSidebarOpen} IsSidebarOpen={IsSidebarOpen} />
			<Sidebar
				setIsSidebarOpen={setIsSidebarOpen}
				IsSidebarOpen={IsSidebarOpen}
			/>
		</main>
	);
}

export default App;
