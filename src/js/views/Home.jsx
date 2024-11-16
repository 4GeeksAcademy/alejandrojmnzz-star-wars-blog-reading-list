import React from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react";
import Card from "../component/Card.jsx";

export function Home() {
	const context = useContext(Context)
	return (
		<>
			<div className="container pt-2 px-5">
				<div className="row">
					<Card characterData={true}/>
					<Card planetData={true}/>
				</div>
			</div>
		</>

	)
}