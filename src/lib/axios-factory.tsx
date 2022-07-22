import axios, { AxiosInstance } from "axios";

const API_KEY = process.env.REACT_APP_QUIZ_KEY;

export class AxiosFactory {
	async create(): Promise<AxiosInstance> {
		const headers: any = {};
		headers["X-Api-Key"] = API_KEY;

		const instance = axios.create({
			headers,
		});
		
		return instance;
	}
}

export const axiosFactory = new AxiosFactory();
