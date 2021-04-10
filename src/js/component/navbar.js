import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { LogoPng } from "../../img/star-wars-logo-1.png";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light  mb-3 vw-100">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png"
						className="d-inline-block align-top logoImg"
						alt="Star Wars Logo"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title="Dropdown button ">
					<Dropdown.Item href="/selectionCarousel">Carousel</Dropdown.Item>
					<Dropdown.Item href="/">Cards</Dropdown.Item>
					<Dropdown.Item href="/details">Details</Dropdown.Item>
				</DropdownButton>
			</div>
		</nav>
	);
};
