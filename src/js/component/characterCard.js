import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharacterCard()
    }, []);

    return store.characterCard.map((character) => {
        return (
            <div className="card container-fluid" key={character.id}>
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
                    
                    <Link to={`/character/details/${character.id}`} className="btn btn-success">
                        Learn More!
                    </Link>
                    <button className="btn btn-success float" onClick={() => actions.handleFav(character.name)}>
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        );
    });
};

