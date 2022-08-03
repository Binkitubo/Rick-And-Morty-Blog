import React, { useState, useEffect } from "react";
import "../../styles/index.css";
import { Cards } from "../component/card";

export const Home = () => {

	return (
		<div className="scroll">
			<h1>Characters</h1>
			<div className="test">
				<Cards />
			</div>
		</div>
	);
};
