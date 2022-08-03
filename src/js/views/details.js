import React from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {

    const params = useParams();
    console.log(params);

    return (
        <div className="jumbotron">
            <h1 className="display-4">Detalles del personaje</h1>
            <hr className="my-4" />
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Return home
                </span>
            </Link>
        </div>
    );
};