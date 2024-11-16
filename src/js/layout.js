import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/Home.jsx";
import { Navbar } from "./component/Navbar.jsx";
import Characters from "./component/Characters.jsx";
import Planets from "./component/Planets.jsx";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<h1>Not found!</h1>} />
					<Route path="/characters/:theid" element={<Characters/>} />
					<Route path="/planets/:theid" element={<Planets/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
