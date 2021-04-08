import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Details = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Details</h1>
			<div className="row ">
				<div className="col-6" />
				<div className="col-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto consectetur, veritatis
					fuga vel ab itaque accusantium nisi expedita perferendis sunt eligendi quae in beatae maxime
					voluptas quod cumque obcaecati!{" "}
				</div>
			</div>

			<div className="row ">
				<div className="col-2">
					<h3>list</h3>
				</div>
				<div className="col-2">
					<h3>list</h3>
				</div>
				<div className="col-2">
					<h3>list</h3>
				</div>
				<div className="col-2">
					<h3>list</h3>
				</div>
				<div className="col-2">
					<h3>list</h3>
				</div>
				<div className="col-2">
					<h3>list</h3>
				</div>
			</div>
		</div>
	);
};
