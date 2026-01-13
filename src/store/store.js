import { create } from "zustand";
import { axiosInstance } from "../axios/axiosInstance";

export const useNewsStore = create((set) => ({
	news: [],
	loading: false,

	fetchNews: async (category = "india") => {
		set({ loading: true });

		try {
			const response = await axiosInstance.get(
				`/api/news?category=${category}`
			);

			if (response.status === 200) {
				set({
					news: response.data.articles,
					loading: false,
				});
			}
		} catch (error) {
			console.error("News fetch error:", error);
			set({ loading: false });
		}
	},
}));
