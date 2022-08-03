import React from "react";
import "../../styles/home.css";
import { Cards } from "../component/card";

export const Home = () => {
	return (
		<div className="scroll">
			<h1>Characters</h1>
			<div className="test">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
};
