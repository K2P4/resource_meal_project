/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MealContextProvider from "./contexts/MealContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<MealContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MealContextProvider>
);
