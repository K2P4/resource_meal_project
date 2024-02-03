/** @format */

import React, { useContext, useEffect, useState } from "react";
import MealCart from "./MealCart";
import { MealContext } from "../contexts/MealContextProvider";
import EmpytyStage from "./EmpytyStage";

const Meal = () => {
	const [food, setFood] = useState([]);
	const { loading, setLoading } = useContext(MealContext);

	const emptyData = Array.from({ length: 12 }, (_, index) => index);

	useEffect(() => {
		fetchMeal();
	}, []);

	const fetchMeal = async () => {
		const meal = await fetch(
			"https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
		);
		const { meals } = await meal.json();


		
		setTimeout(() => {
			setFood(meals);
			setLoading(false);
		}, 1000);

		console.log(meals);
	};

	return (
		<>
			{!loading && (
				<div className="flex flex-wrap gap-2 sm:gap-5 mt-3  sm:mt-4 duration-75 justify-center">
					{food.map((item) => {
						return (
							<MealCart
								key={item.idMeal}
								images={item.strMealThumb}
								name={item.strMeal}
								id={item.idMeal}
								loading={loading}
							/>
						);
					})}
				</div>
			)}

			{loading && (
				<div className="flex flex-wrap  mt-2 gap-2  w-[90%]  md:w-[80%]  sm:w-[80%] md:gap-6  sm:gap-6 mx-auto justify-center">
					{emptyData.map((index) => (
						<EmpytyStage key={index} />
					))}
				</div>
			)}
		</>
	);
};

export default Meal;
