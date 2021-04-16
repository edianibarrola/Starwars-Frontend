import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const PlanetDetails = () => {
	const { store, actions } = useContext(Context);

	let detClimate = store.details.climate;
	let detGravity = store.details.gravity;
	let detPopulation = store.details.population;
	let detTerrain = store.details.terrain;
	let detRotationPeriod = store.details.rotation_period;
	let detOrbitalPeriod = store.details.orbital_period;
	let detName = store.details.name;

	console.log("store details.name: " + store.details.name);
	return (
		<div className="container ">
			<div className="detailsBox">
				<h1>Details</h1>
				<div className="row detailsRow">
					<div className="col-sm-12 col-md-6">
						<img src="http://via.placeholder.com/800x600" alt="" className="detailsImg" />
					</div>
					<div className="col-sm-12 col-md-6 text-center align-self-center textwhite">
						{/* <h3>{detName}</h3> */}
						<h3 className="detailsH3">{detName != undefined ? detName : "name undefined"}</h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto consectetur, veritatis
						fuga vel ab itaque accusantium nisi expedita perferendis sunt eligendi quae in beatae maxime
						voluptas quod cumque obcaecati!{" "}
					</div>
				</div>

				<div className="row  ">
					<div className="col-md-2 col-sm-12  mx-auto">
						<ul className="detailLists ">
							<h3>Climate</h3>
							<li className="detailListItem">
								{detClimate != undefined ? detClimate : "Mass undefined"}
							</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Gravity</h3>
							<li className="detailListItem">
								{detGravity != undefined ? detGravity : "Mass undefined"}
							</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Population</h3>
							<li className="detailListItem">
								{detPopulation != undefined ? detPopulation : "Mass undefined"}
							</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Terrain</h3>
							<li className="detailListItem">
								{detTerrain != undefined ? detTerrain : "Mass undefined"}
							</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Rotation Period</h3>
							<li className="detailListItem">
								{detRotationPeriod != undefined ? detRotationPeriod : "Mass undefined"}
							</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Orbital Period</h3>
							<li className="detailListItem">
								{detOrbitalPeriod != undefined ? detOrbitalPeriod : "Mass undefined"}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
PlanetDetails.propTypes = {
	propUrl: PropTypes.string
};
