import { axiosFactory } from "../lib/axios-factory";


const baseUri =  "https://quizapi.io/api/v1";

export async function getQuestions(category: string | undefined, difficulty: string | undefined) {
    const axios = await axiosFactory.create();

    const params = {
        category: category,
        difficulty: difficulty,
        limit: 5
    };

    const response = await axios.get(`${baseUri}/questions`, { params : params });

    return response.data;
}