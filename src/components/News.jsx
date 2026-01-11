import React, { useEffect, useState } from "react";
import { useNewsStore } from "../store/store";
import Loader from "./Loader";


const News = () => {
	const fetchNews = useNewsStore((state) => state.fetchNews);
	const news = useNewsStore((state) => state.news);
	const [show, setShow] = useState(16);

	const loading = useNewsStore((state) => state.loading);

	
	
	useEffect(() => {
		fetchNews();
	}, []);
	

	if (loading) {
		return <Loader/>
	}
	return (
		<div className="bg-gray-100 min-h-screen">
			<div className="max-w-7xl mx-auto px-6 py-4">
				{/* Heading */}
				<h1 className="mb-10 text-center text-4xl font-bold text-gray-800">
					Top <span className="text-blue-600">News</span>
				</h1>

				{/* News Grid */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
					{news &&
						news.slice(0, show).map((currNews, index) => {
							if (!currNews.author || !currNews.urlToImage)
								return null;

							return (
								<div
									key={index}
									className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
								>
									{/* Image */}
									<img
										src={currNews.urlToImage}
										alt={currNews.title}
										className="h-48 w-full object-cover"
									/>

									{/* Content */}
									<div className="p-5 flex flex-col gap-3">
										{/* Title */}
										<h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
											{currNews.title}
										</h2>

										{/* Description */}
										<p className="text-sm text-gray-600 line-clamp-3">
											{currNews.content}
										</p>

										{/* Author */}
										<p className="text-sm font-medium text-blue-600">
											{currNews.author}
										</p>

										{/* Date */}
										<p className="text-xs text-gray-700 font-semibold">
											{new Date(
												currNews.publishedAt
											).toLocaleString()}
										</p>

										{/* Button */}
										<div className="mt-4 flex justify-end">
											<button
												onClick={() =>
													window.open(currNews.url)
												}
												className="
                          px-4 py-2 text-sm rounded-full
                          bg-blue-600 text-white
                          hover:bg-blue-700 transition
                        "
											>
												Read More →
											</button>
										</div>
									</div>
								</div>
							);
						})}
				</div>

				{/* View More */}
				<div className="mt-12 flex justify-center">
					<button
						onClick={() => setShow(show + 3)}
						className="
              px-5 py-2 rounded-full
                                bg-orange-100 text-orange-700 border border-orange-600
                                hover:bg-orange-200 transition font-medium
            "
					>
						View More
					</button>
				</div>
			</div>
		</div>
	);
};

export default News;
