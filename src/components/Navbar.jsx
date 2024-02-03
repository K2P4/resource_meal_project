/** @format */

import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const [data, setData] = useState("");

	const nav = useNavigate();

	const Handler = () => {
		nav("/Search/" + data);
	};
	console.log(data);

	return (
		<div className=" flex px-3 shadow py-2 sm:py-2 justify-between  sm:justify-around  mt-3">
			<div className=" flex align-middle items-center  ">
				<Link to={"/"}>
					<div className=" flex items-center  hover:text-orange-400">
						<GiKnifeFork className="me-1 text-xl sm:text-3xl sm:me-2" />
						<h2 className="font-serif text-sm font-bold">Japanese Meal</h2>
					</div>
				</Link>
			</div>

			<div className="  float-end  w-[40%]  sm:w-[20%] ">
				<form onSubmit={Handler}>
					<div className="input-group align-middle flex ">
						<div className=" input-group-text shadow-sm bg-white rounded-3xl ">
							<BiSearch className=" text-xl sm:text-2xl" />
						</div>

						<input
							type="text"
							value={data}
							onChange={(e) => setData(e.target.value)}
							className="bg-white text-sm shadow-sm form-control border-l-0 rounded-3xl px-0 sm:px-3  focus:border-gray-300 icon font-serif "
							placeholder="Search..."
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

// flex   sm:justify-around  py-2 sm:py-4 shadow mt-2

export default Navbar;
