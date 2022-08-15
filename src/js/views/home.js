import React from "react";
import "../../styles/index.css";
import { CharacterCard } from "../component/characterCard";
import { LocationCard } from "../component/locationCard";

export const Home = () => {

	return (
		<>
			<div className="scroll">
				<h1>Characters</h1>
				<CharacterCard />
			</div>
			<p className="spacer"></p>
			<div className="scroll">

				<h1>Locations</h1>
				<LocationCard />
			</div>
		</>
	);
};
