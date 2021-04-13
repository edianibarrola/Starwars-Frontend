import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Cards } from "../component/cards";

export const CardsView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Cards />
		</div>
	);
};
