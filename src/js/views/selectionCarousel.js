import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Carousel from "react-bootstrap/Carousel";

//import PeopleImg from "../../img/people.jpg";
import PeopleImg from "../../img/people2.jpg";
import PlanetImg from "../../img/planets.jpg";
import VehiclesImg from "../../img/vehicles.jpg";

export const SelectionCarousel = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container carouselContainer">
			<div className="detailsBox">
				<Carousel fade>
					<Carousel.Item interval={4000}>
						<img className="d-block carouselImg " src={PeopleImg} alt="First slide" />
						<Link to="/cardsview">
							<Carousel.Caption>
								<h3>People</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Link>
					</Carousel.Item>
					<Carousel.Item interval={4000}>
						<img className="d-block carouselImg" src={PlanetImg} alt="Second slide" />
						<Link to="/cardsview">
							<Carousel.Caption>
								<h3>Planets</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Link>
					</Carousel.Item>
					<Carousel.Item interval={4000}>
						<img className="d-block carouselImg" src={VehiclesImg} alt="Third slide" />
						<Link to="/cardsview">
							<Carousel.Caption>
								<h3>Vehicles</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Link>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};
