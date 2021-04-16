import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { PeopleCards } from "../component/cardPeople";
import { PlanetCards } from "../component/cardPlanets";
import { VehicleCards } from "../component/cardVehicles";

export const CardsView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<PeopleCards />
				<PlanetCards />
				<VehicleCards />
			</div>
		</div>
	);
};
