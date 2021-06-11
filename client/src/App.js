import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Notes from "./containers/Notes";
import "./App.css";

function App() {
	return (
		<main>
			<Router>
				<Switch>
					<Route path="/" exact={true}>
						<Notes />
					</Route>
					{/*		<Route path="/reminder">
						<Reminder />
					</Route>
				 	<Route path="/label">
						<Label />
					</Route>
					<Route path="/archive">
						<Archive />
					</Route>
					<Route path="/trash">
						<Trash />
					</Route> */}
				</Switch>
			</Router>
		</main>
	);
}

export default App;
