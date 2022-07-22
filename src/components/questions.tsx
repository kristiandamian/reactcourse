import { useEffect } from "react";
import { getQuestions } from "../services/questions";
import Answer from "./answer";
import { useParams } from "react-router-dom";
import CustomBox from "./customBox";

const Questions = () => {
    let params = useParams();

	useEffect(() => {
        let category = params.category !== "All" ? params.category : undefined; 
        let difficulty = params.difficulty !== "All" ? params.difficulty : undefined;

        getQuestions(category, difficulty) 
            .then((res) => {
                //TODO Save in local storage?
                //Show questions
            })
            .catch((err) => {
				const error = err || err.response?.data;
				console.error(error);
			})
    }, []);

    return (
        <CustomBox>
            <Answer id={1} text="" isCorrect={false} />
        </CustomBox>
    );
}

export default Questions