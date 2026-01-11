import React from "react";

const Footer = () => {
	return (
		<footer className="bg-white border-t border-gray-200 mt-16">
			<div className="max-w-7xl mx-auto px-6 py-10">
				{/* Top Section */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{/* Brand */}
					<div>
						<h2 className="text-2xl font-bold text-blue-600">
							SM<span className="text-gray-800">News</span>
						</h2>
						<p className="mt-3 text-sm text-gray-600 leading-relaxed">
							SMNews is a modern news platform delivering the
							latest headlines across business, technology,
							sports, health, and more — all in one place.
						</p>
					</div>

					{/* Categories */}
					<div>
						<h3 className="text-lg font-semibold text-gray-800 mb-3">
							Categories
						</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>Business</li>
							<li>Technology</li>
							<li>Sports</li>
							<li>Health</li>
							<li>Entertainment</li>
						</ul>
					</div>

					{/* About */}
					<div>
						<h3 className="text-lg font-semibold text-gray-800 mb-3">
							About SMNews
						</h3>
						<p className="text-sm text-gray-600 leading-relaxed">
							Built using modern web technologies, SMNews focuses
							on clean UI, fast performance, and real-time news
							updates from trusted sources.
						</p>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-10 border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
					<p className="text-sm text-gray-500">
						© {new Date().getFullYear()} SMNews. All rights
						reserved.
					</p>

					<p className="text-sm text-gray-500">
						Built with ❤️ using React & Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
