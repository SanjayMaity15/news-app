import { create } from "zustand";
import { axiosInstance } from "../axios/axiosInstance";

export const useNewsStore = create((set, get) => ({
	news: [],
	loading: false,
	fetchNews: async (category = "india") => {
		set({
			loading: true,
		});
		try {
			const response = await axiosInstance.get(
				`/everything?q=${category}&apiKey=${
					import.meta.env.VITE_API_KEY
				}`
			);

			if (response.status === 200) {
				set({
					news: response.data.articles,
					loading: false,
				});
			}
		} catch (error) {
			console.log(error);
			set({
				loading: false,
			});
		}
	},
}));
