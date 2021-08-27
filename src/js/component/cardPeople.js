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
export const PeopleCards = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="detailsBox">
			<h1>People</h1>
			<div className="row cardRow">
				{store.people.map((item, index) => {
					return (
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" key={index}>
							<div className="card">
								<img className="card-img-top" src={peopleImgLink} alt="Card image cap" />
								<div className="card-body">
									<h6 className="card-title">{item.name}</h6>
									<div className=" d-flex justify-content-between align-items-center ">
										<div className="col-md-6 col-sm-12 col-xs-12">
											<Link to={"/details/person/" + item.id}>
												<button
													href="#"
													className="btn cardDetailsButton"
													onClick={() => actions.fetchDetails("/person/" + item.id)}>
													Learn More!
												</button>
											</Link>
										</div>
										<div className="col-md-4 col-sm-12  justify-self-end">
											<button
												href="#"
												className="btn likeButton "
												onClick={() =>
													actions.addFavorite({
														name: item.name,
														url: "/person/" + item.id,
														id: item.id
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
