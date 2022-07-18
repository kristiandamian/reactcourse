import { axiosFactory } from "../lib/axios-factory";


const baseUri =  "https://quizapi.io/api/v1";

export async function getQuestions() {
    const axios = await axiosFactory.create();
    const response = await axios.get(`${baseUri}/api/membership/password/forgot`, payload);

    return response.data;
}