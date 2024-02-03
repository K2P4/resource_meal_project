/** @format */

import React from "react";
import Meal from "./components/Meal";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Error from "./components/Error";

const App = () => {
	return (
		<div className="  ">
      <Navbar/>
			<Routes>
				<Route path="/" element={<Meal />} />

				<Route path="/detail/:id" element={<Detail />} />
				<Route path="Search/:name" element={<Search />} />
			</Routes>
			
		</div>
	);
};

export default App;
