/** @format */

import React from "react";
import "./Meal.css";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const MealCart = ({ images, name, id }) => {
	return (
		<div key={id} className=" group  transition-transform mt-3 relative meal">
			
			<img
				src={images}
				alt=""
				className=" group-hover:rotate-6 duration-150 transition-transform  w-[150px] sm:w-[250px] object-cover rounded-lg meal-img"
			/>

			<Link to={`/detail/${id}`}>
				<div className="flex justify-center duration-150 meal-img icon z-[-1]  absolute top-[40%] left-[40%] align-middle items-center  bg-orange-500 h-11 w-11 rounded-[100%] text-white">
					<BiSearch className="text-2xl " />
				</div>
			</Link>
		</div>
	);
};

export default MealCart;
