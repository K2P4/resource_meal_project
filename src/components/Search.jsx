/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";

const Search = () => {
	const { name } = useParams();
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const api = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
		);
		const { meals } = await api.json();
		const mealData = meals.map((meal) => meal.strMeal);

		setItems(meals);
	};

	return (
		<div className=" ">
			{items.map((item) => {
				return (
					<div
						key={item.idMeal}
						className="  duration-100 transition-transform sm:mt-0  w-[90%] h-[200px]  md:h-[300px] flex flex-row sm:flex-row  sm:items-center sm:align-middle md:flex-row  md:align-middle md:items-center  justify-center align-middle items-center mx-auto  sm:w-[90%] sm:h-[450px] gap-1 md:gap-5 md:mt-10 sm:gap-20 md:w-[90%] ">
						<img
							src={item.strMealThumb}
							alt=""
							className=" mt-0  w-[200px]  sm:me-3  h-[170px]  sm:w-[45%] md:mt-0 sm:h-[330px] sm:mx-auto     md:w-full md:h-[300px] object-cover rounded md:me-5"
						/>
						<div className=" sm:mt-0  md:mt-3 ms-3 ">
							<h2 className=" text-md sm:text-xl md:text-2xl text-gray-500 font-serif mb-1 md:mb-4 sm:mb-4 font-bold tracking-wide">
								{item.strMeal}
							</h2>
							<h2 className=" text-sm sm:text-md  text-gray-500 font-bold font-serif mb-1 sm:mb-3 md:mb-3 tracking-wide">
								{item.strArea}
							</h2>
							<h2 className="  sm:hidden md:hidden   text-gray-500 font-bold font-serif mb-2 tracking-wide">
								{item.strCategory}
							</h2>
							<p className="text-xs hidden text-gray-500 font-medium leading-6 sm:inline md:inline  tracking-normal  font-serif text-justify mb-2 sm:tracking-wide sm:leading-7 sm:text-sm  md:text-base ">
								{item.strInstructions.slice(0, 350)} ...
							</p>

							<a
								href={item.strYoutube}
								className="text-red-500 text-4xl"
								target={"_blank"}>
								<AiFillYoutube />
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Search;
