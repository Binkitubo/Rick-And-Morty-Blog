import React, { useState, useEffect } from "react";
import sample from "../../img/400x200.png"
import { Link } from "react-router-dom";

export const LocationCards = () => {

    const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/location")
			.then((response) => response.json())
			.then((data) => {
				setList(data.results);
			});
	});

    const html = list.map((location) => {
    return (
        <div className="card container-fluid">
            <img src="https://img2.wallspic.com/crops/1/4/8/7/3/137841/137841-arte-animacion-artes_visuales-ilustracion-caricatura-3840x2160.jpg" className="card-img-top sample" />
            <div className="card-body">
                <h5 className="card-title">{location.name}</h5>
                <p className="card-text">
                    Type: {location.type}
                    <br />
                    Dimension: {location.dimension} 
                </p>
                <Link to={`/details/${location.id}`} className="btn btn-primary">
                    Learn More!
                </Link>
                <a href="#" className="btn btn-danger float">♥</a>
            </div>
        </div>
    );
    });
    return ( html );
};

