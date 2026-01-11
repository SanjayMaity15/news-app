import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Footer from "./components/Footer";
import News from "./components/News";

const App = () => {

	const category = [
		{
			text: "business",
			color: "px-5 py-2 rounded-lg bg-blue-100 text-blue-700 border border-blue-600 hover:bg-blue-200 transition font-medium",
		},
		{
			text: "entertainment",
			color: "px-5 py-2 rounded-lg bg-purple-100 text-purple-700 border border-purple-600 hover:bg-purple-200 transition font-medium",
		},
		{
			text: "general",
			color: "px-5 py-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-600 hover:bg-gray-200 transition font-medium",
		},
		{
			text: "health",
			color: "px-5 py-2 rounded-lg bg-green-100 text-green-700 border border-green-600 hover:bg-green-200 transition font-medium",
		},
		{
			text: "science",
			color: "px-5 py-2 rounded-lg bg-teal-100 text-teal-700 border border-teal-600 hover:bg-teal-200 transition font-medium",
		},
		{
			text: "sports",
			color: "px-5 py-2 rounded-lg bg-red-100 text-red-700 border border-red-600 hover:bg-red-200 transition font-medium",
		},
		{
			text: "technology",
			color: "px-5 py-2 rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-600 hover:bg-indigo-200 transition font-medium",
		},
	];


	return (
		<div>
			<Navbar />

			<div className="flex gap-5 bg-gray-100 sticky top-15 justify-center pt-2 pb-5">
				{category.map((elem) => (
					<Button elem={elem} key={elem.text}/>
				))}
      </div>

      <News/>
      
      <Footer/>
		</div>
	);
};

export default App;
