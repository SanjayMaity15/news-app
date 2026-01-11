import React from "react";
import { useNewsStore } from "../store/store";

const Button = ({ elem }) => {
	const { text, color } = elem;

	const fetchNews = useNewsStore(state => state.fetchNews)

	return (
		<button
			type="button"
			onClick={() => fetchNews(text)}
			className={`${color} px-8 py-2 rounded-md
                 
                 transition duration-200
                 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-6 capitalize`}
		>
			{text}
		</button>
	);
};

export default Button;
