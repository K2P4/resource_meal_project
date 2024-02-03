/** @format */

import { createContext, useState } from "react";

export const MealContext = createContext();

const MealContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);

	return (
		<MealContext.Provider value={{ loading, setLoading }}>
			{children}
		</MealContext.Provider>
	);
};

export default MealContextProvider;
