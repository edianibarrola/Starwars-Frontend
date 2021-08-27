import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { CardsView } from "./views/cardsView";
import { Details } from "../js/component/details";
import { PlanetDetails } from "./component/planetDetails";
import { VehicleDetails } from "./component/vehicleDetails";
import { SelectionCarousel } from "../js/views/selectionCarousel";

import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { StarshipCards } from "./component/cardVehicles";
import { StarshipDetails } from "./component/starshipDetails";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<SelectionCarousel />
						</Route>
						<Route exact path="/cardsview">
							<CardsView />
						</Route>
						<Route exact path="/details">
							<Details />
						</Route>
						<Route exact path="/details/person/:id">
							<Details />
						</Route>
						<Route exact path="/details/planet/:id">
							<PlanetDetails />
						</Route>
						<Route exact path="/details/vehicle/:id">
							<VehicleDetails />
						</Route>
						<Route exact path="/details/starship/:id">
							<StarshipDetails />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
