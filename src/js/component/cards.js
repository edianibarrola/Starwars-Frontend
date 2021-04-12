import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
const peopleImgLink =
	"https://i3.wp.com/mickeyblog.com/wp-content/uploads/2021/03/luke-skywalker-disney-plus-mandalorian-the-rescue-768x433.jpeg";
const planetImgLink =
	"https://i.natgeofe.com/n/606b9e5c-68cb-49f9-8891-7b8c28919a2e/00000165-672f-d998-adf7-67bf0fd10000.jpg";
const vehicleImgLink =
	"https://www.denofgeek.com/wp-content/uploads/2015/12/big_thumb_cd04cc40bd2e7060c7a2b417b1743b74.jpg?fit=620%2C349";
const placeHolderImg = "https://via.placeholder.com/286x180?text=Edian+was+here";
export const Cards = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="detailsBox">
			<h1>People</h1>
			<div className="row cardRow">
				{store.people.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "15rem" }}>
								<img className="card-img-top" src={peopleImgLink} alt="Card image cap" />
								<div className="card-body">
									<h6 className="card-title">{item.name}</h6>

									<div className="d-flex justify-content-between">
										<Link to={"/details/person/" + item.uid}>
											<button href="#" className="btn cardDetailsButton">
												Learn More!
											</button>
										</Link>

										<button
											href="#"
											className="btn likeButton "
											onClick={() =>
												actions.addFavorite({
													name: item.name,
													url: item.url,
													uid: item.uid
												})
											}>
											&hearts;
										</button>
									</div>
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
							<div className="card" style={{ width: "15rem" }}>
								<img className="card-img-top" src={planetImgLink} alt="Card image cap" />
								<div className="card-body">
									<h6 className="card-title">{item.name}</h6>

									<div className="d-flex justify-content-between">
										<Link to={"/details/planet/" + item.uid}>
											<button href="#" className="btn cardDetailsButton">
												Learn More!
											</button>
										</Link>

										<button
											href="#"
											className="btn likeButton "
											onClick={() =>
												actions.addFavorite({
													name: item.name,
													url: item.url,
													uid: item.uid
												})
											}>
											&hearts;
										</button>
									</div>
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
							<div className="card" style={{ width: "15rem" }}>
								<img className="card-img-top" src={vehicleImgLink} alt="Card image cap" />
								<div className="card-body">
									<h6 className="card-title ">{item.name}</h6>

									<div className="d-flex justify-content-between ">
										<Link to={"/details/vehicle/" + item.uid}>
											<button href="#" className="btn cardDetailsButton">
												Learn More!
											</button>
										</Link>

										<button
											href="#"
											className="btn likeButton "
											onClick={() =>
												actions.addFavorite({
													name: item.name,
													url: item.url,
													uid: item.uid
												})
											}>
											&hearts;
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
