import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LocationCard = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadLocationCard()
    }, []);

    return store.locationCard.map((location) => {
        return (
            <div className="card container-fluid" key={location.id}>
                <img src="https://img2.wallspic.com/crops/1/4/8/7/3/137841/137841-arte-animacion-artes_visuales-ilustracion-caricatura-3840x2160.jpg" className="card-img-top sample" />
                <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">
                        Type: {location.type}
                        <br />
                        Dimension: {location.dimension}
                    </p>
                    
                    <Link to={`/location/details/${location.id}`} className="btn btn-success">
                        Learn More!
                    </Link>
                    <button className="btn btn-success float"> 
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        );
    });
};


