import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Rick_and_Morty.svg.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar bg-light">
			<Link to="/">
				<img src={logo} className="logo" />
			</Link>

			<div className="ml-auto">
				<div className="btn-group">
					<button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <i className="fas fa-heart"></i>
					</button>
					<ul className="dropdown-menu btn-success">
						{store.addFav.length > 0 ? (
							store.addFav.map((item, i) => (
								<li key={i} className="dropdown-item d-flex justify-content-between">
									{item}
									<button className="border ms-2" onClick={() => {actions.handleDelete(item);}}>
										<i className="fas fa-trash"></i>
									</button>
								</li>
							))
						) : (
							<li className="dropdown-item">Empty</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
