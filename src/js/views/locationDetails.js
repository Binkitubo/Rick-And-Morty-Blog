import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const LocationDetails = () => {

    const params = useParams();

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadLocationDetails(params.id);
    }, []);

        return (<>
            <div className="details">
                <h1 className="display-4 text-center">Location Details</h1>
                <Link to="/">
                    <span className="btn btn-success btn-lg" href="#" role="button">
                        ← Return home
                    </span>
                </Link>
            </div>

            <div className="detailsCard container-fluid" key={store.locationDetails.id}>
                <img src="https://img2.wallspic.com/crops/1/4/8/7/3/137841/137841-arte-animacion-artes_visuales-ilustracion-caricatura-3840x2160.jpg" className="card-img-top sample" />
                <div className="card-body">
                    <h5 className="card-title"><strong>{store.locationDetails.name}</strong></h5>
                    <p className="card-text">
                        Type: {store.locationDetails.type}
                        <br />
                        Dimension: {store.locationDetails.dimension}
                    </p>
                    <button className="btn btn-success" onClick={() => actions.handleFav(store.locationDetails.name)}>
                        Add to Favorites <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            </>
            );
};