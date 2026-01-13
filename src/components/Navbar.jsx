import React, { useEffect, useState } from "react";
import { useNewsStore } from "../store/store";

const Navbar = () => {
	const [searchValue, setSearchValue] = useState("");
	const fetchNews = useNewsStore((state) => state.fetchNews);

	useEffect(() => {
		if (!searchValue) return;

		const timer = setTimeout(() => {
			fetchNews(searchValue);
		}, 500);

		return () => clearTimeout(timer);
	}, [searchValue]);

	return (
		<nav className="sticky top-0 z-50 w-full bg-white shadow">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Brand */}
				<h1 className="text-2xl font-bold text-blue-600 tracking-wide">
					MTY<span className="text-gray-800">News</span>
				</h1>

				{/* Search */}
				<div className="relative w-64 sm:w-80">
					<input
						type="text"
						placeholder="Search news..."
						className="
              w-full
              pl-10 pr-4 py-2
              rounded-full
              border border-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              focus:border-transparent
              text-gray-700
              placeholder-gray-400
            "
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>

					{/* Search Icon */}
					<svg
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						width="18"
						height="18"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<circle cx="11" cy="11" r="8" />
						<line x1="21" y1="21" x2="16.65" y2="16.65" />
					</svg>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
