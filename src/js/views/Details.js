import React from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {

    const params = useParams();
    console.log(params);

    return (
        <div className="jumbotron">
            <h1 className="display-4">Details</h1>
            <Link to="/">
                <span className="btn btn-success btn-lg" href="#" role="button">
                    Return home
                </span>
            </Link>
        </div>
    );
};