import React from "react";
import sample from "../../img/400x200.png"

export const Cards = () => {
    return (
        <div className="card container-fluid">
            <img src={sample} className="card-img-top sample" />
            <div className="card-body">
                <h5 className="card-title">Luke Skywalker</h5>
                <p className="card-text">
                    Gender: MaleHair 
                    <br />
                    Color: Blond 
                    <br />
                    Eye Color: Blue
                </p>
                <a href="#" className="btn btn-primary">Learn More!</a>
                <a href="#" className="btn btn-danger float">♥</a>
            </div>
        </div>
    );
};

