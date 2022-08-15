import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {

    const params = useParams();

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharacterDetails(params.id);
    }, []);

        return (<>
            <div className="details">
                <h1 className="display-4 text-center">Character Details</h1>
                <Link to="/">
                    <span className="btn btn-success btn-lg" href="#" role="button">
                        ← Return home
                    </span>
                </Link>
            </div>

            <div className="detailsCard container-fluid" key={store.characterDetails.id}>
                <img src={store.characterDetails.image} className="card-img-top sample" />
                <div className="card-body">
                    <h5 className="card-title"><strong>{store.characterDetails.name}</strong></h5>
                    <p className="card-text">
                        <strong>Gender: </strong>{store.characterDetails.gender}
                        <br />
                        <strong>Species: </strong>{store.characterDetails.species}
                        <br />
                        <strong>Status: </strong>{store.characterDetails.status}
                    </p>
                    <button className="btn btn-success" onClick={() => actions.handleFav(store.characterDetails.name)}>
                        Add to Favorites <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            </>
            );
};