import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>People</h1>
			<div className="row cardRow">
				{store.people.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img
									className="card-img-top"
									src="https://via.placeholder.com/286x180?text=Edian+was+here"
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card content.
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h1>Planets</h1>
			<div className="row cardRow">
				{store.planets.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img
									className="card-img-top"
									src="https://via.placeholder.com/286x180?text=Edian+was+here"
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card content.
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h1>Starships</h1>
			<div className="row cardRow">
				{store.starships.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img
									className="card-img-top"
									src="https://via.placeholder.com/286x180?text=Edian+was+here"
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card content.
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
