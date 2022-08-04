import React from "react";
import "../../styles/index.css";
import { CharacterCards } from "../component/characterCard";
import { LocationCards } from "../component/locationCard";

export const Home = () => {

		return (
		<>
			<div className="scroll">
			<h1>Characters</h1>
				<CharacterCards />
			</div>
			
			<div  className="scroll">
			<p className="spacer"></p>
			<h1>Locations</h1>
				<LocationCards />
			</div>
		</>
	);
};
