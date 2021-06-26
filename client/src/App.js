import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Notes from "./views/Notes";
import "./App.css";

function App() {
	return (
		<main>
			<Router>
				<Switch>
					<Route path="/" exact={true}>
						<Notes type="" />
					</Route>
				</Switch>
			</Router>
		</main>
	);
}

export default App;
