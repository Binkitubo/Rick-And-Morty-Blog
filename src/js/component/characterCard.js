import React, { useState, useEffect } from "react";
import sample from "../../img/400x200.png"
import { Link } from "react-router-dom";

export const CharacterCards = () => {

    const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => {
				setList(data.results);
			});
	});

    const html = list.map((character) => {
    return (
        <div className="card container-fluid">
            <img src="https://images6.alphacoders.com/909/thumb-1920-909641.png" className="card-img-top sample" />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                    Gender: {character.gender}
                    <br />
                    Species: {character.species} 
                    <br />
                    Origin: {character.origin.name}
                </p>
                <Link to={`/details/${character.id}`} className="btn btn-primary">
                    Learn More!
                </Link>
                <a href="#" className="btn btn-danger float">♥</a>
            </div>
        </div>
    );
    });
    return ( html );
};

