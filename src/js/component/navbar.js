import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 vw-100">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
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
