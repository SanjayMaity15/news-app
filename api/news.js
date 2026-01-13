import axios from "axios";

export default async function handler(req, res) {
	const { category = "india" } = req.query;

	try {
		const response = await axios.get("https://newsapi.org/v2/everything", {
			params: {
				q: category,
				apiKey: process.env.NEWS_API_KEY,
			},
			headers: {
				"User-Agent": "Mozilla/5.0",
			},
		});

		res.status(200).json(response.data);
	} catch (error) {
		res.status(500).json({
			message: "Failed to fetch news",
			error: error.response?.data || error.message,
		});
	}
}
