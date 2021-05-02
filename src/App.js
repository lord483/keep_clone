import { useState } from "react";

import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
	const [IsSidebarOpen, setIsSidebarOpen] = useState(true);
	return (
		<main>
			<Nav props={(setIsSidebarOpen, IsSidebarOpen)} />
			<Sidebar props={(IsSidebarOpen, setIsSidebarOpen)} />
		</main>
	);
}

export default App;
