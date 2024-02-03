/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";

const Detail = () => {
	const { id } = useParams();
	const [items, setItems] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const api = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		const { meals } = await api.json();
		setItems(meals[0]);
		console.log(meals[0]);
	};

	return (
		<div className=" mt-2  duration-100 transition-transform  overflow-visible sm:overflow-visible sm:mt-0  w-[90%]  flex flex-col sm:flex-col md:flex-row md:align-middle md:items-end  justify-center align-middle items-center mx-auto md:w-[80%] sm:w-[90%]  h-screen gap-3 sm:gap-20 ">
			<img
				src={items.strMealThumb}
				alt=""
				className=" w-full mt-80 h-[200px]  sm:w-full sm:mt-96 sm:h-[300px] sm:mx-auto md:mx-auto     md:w-[70%] md:h-[500px] object-cover rounded"
			/>
			<div className=" sm:mt-0  md:mt-0  ">
				<h2 className=" text-xl  sm:text-2xl text-gray-500 font-serif mb-2 sm:mb-4 font-bold tracking-wide">
					{items.strMeal}
				</h2>
				<h2 className=" text-gray-500 font-bold font-serif mb-2 sm:mb-3 tracking-wide">
					{items.strArea}
				</h2>
				<h2 className=" text-gray-500 font-bold font-serif mb-2 tracking-wide">
					{items.strCategory}
				</h2>
				<p className=" text-gray-500 font-medium leading-6  tracking-normal  font-serif text-justify mb-2 sm:tracking-wide sm:leading-7">
					{items.strInstructions}
				</p>

				<a
					href={items.strYoutube}
					className="text-red-500 text-4xl"
					target={"_blank"}>
					<AiFillYoutube />
				</a>
			</div>
		</div>
	);
};

export default Detail;
