import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const VehicleDetails = () => {
	const { store, actions } = useContext(Context);

	let detModel = store.details.model;
	let detClass = store.details.class;
	let detManufacturer = store.details.manufacturer;
	let detLength = store.details.length;
	let detCrew = store.details.crew;
	let detPassengers = store.details.passengers;
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
							<h3>Class</h3>
							<li className="detailListItem">{detClass != undefined ? detClass : "Class undefined"}</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Model</h3>
							<li className="detailListItem">{detModel != undefined ? detModel : "Model undefined"}</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Manufacturer</h3>
							<li className="detailListItem">
								{detManufacturer != undefined ? detManufacturer : "Manufacturer undefined"}
							</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Length</h3>
							<li className="detailListItem">
								{detLength != undefined ? detLength : "Length undefined"}
							</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Crew</h3>
							<li className="detailListItem">{detCrew != undefined ? detCrew : "Crew undefined"}</li>
						</ul>
					</div>
					<div className="col-md-2 col-sm-12">
						<ul className="detailLists">
							<h3>Passengers</h3>
							<li className="detailListItem">
								{detPassengers != undefined ? detPassengers : "Passengers undefined"}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
VehicleDetails.propTypes = {
	propUrl: PropTypes.string
};
