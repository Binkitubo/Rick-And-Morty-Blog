import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const heart = <FontAwesomeIcon icon={faHeart} />

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
            <img src={character.image} className="card-img-top sample" />
            <div className="card-body">
                <h5 className="card-title"><strong>{character.name}</strong></h5>
                <p className="card-text">
                    <strong>Gender: </strong>{character.gender}
                    <br />
                    <strong>Species: </strong>{character.species} 
                    <br />
                    <strong>Origin: </strong>{character.origin.name}
                </p>
                <Link to={`/details/${character.id}`} className="btn btn-success">
                    Learn More!
                </Link>
                <a href="#" className="btn btn-success float">{heart}</a>
            </div>
        </div>
    );
    });
    return ( html );
};

