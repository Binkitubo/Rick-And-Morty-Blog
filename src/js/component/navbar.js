import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Star-Wars-Logo-5.png"

export const Navbar = () => {
	return (
		<nav className="navbar bg-light">
			<Link to="/">
				<img src={logo} className="logo" />
			</Link>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>

			<div className="ml-auto">
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span class="badge text-bg-secondary">5</span>
					</button>
					<ul className="dropdown-menu">
						<li>
							<a className="dropdown-item" href="#">Empty</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
