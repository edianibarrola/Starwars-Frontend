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
export const PlanetCards = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="detailsBox">
			<h1>Planets</h1>
			<div className="row cardRow">
				{store.planets.map((item, index) => {
					return (
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" key={index}>
							<div className="card">
								<img className="card-img-top" src={planetImgLink} alt="Card image cap" />
								<div className="card-body">
									<h6 className="card-title">{item.name}</h6>
									<div className="row">
										<div className="col-md-6 col-sm-12 col-xs-12">
											<Link to={"/details/planet/" + item.id} props={item.url}>
												<button
													href="#"
													className="btn cardDetailsButton"
													onClick={() => actions.fetchDetails("/planet/" + item.id)}>
													Learn More!
												</button>
											</Link>
										</div>
										<div className="col-md-6 col-sm-12">
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
						</div>
					);
				})}
			</div>
		</div>
	);
};
