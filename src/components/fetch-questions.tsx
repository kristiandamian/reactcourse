import { useEffect } from "react";
import { getQuestions } from "../services/questions";
import { useParams, useNavigate } from 'react-router-dom';
import { SaveQuestions, SaveCurrentQuestion } from '../lib/questionStorage';
import CustomBox from "./customBox";

const FetchQuestions = () => {
    let params = useParams();
    let navigate = useNavigate();
    
	useEffect(() => {
        let category = params.category !== "All" ? params.category : undefined; 
        let difficulty = params.difficulty !== "All" ? params.difficulty : undefined;

        getQuestions(category, difficulty) 
            .then((res) => {
                SaveQuestions(JSON.stringify(res));
                SaveCurrentQuestion(1);
                navigate(`/question/${1}`, { replace: true });
            })
            .catch((err) => {
				const error = err || err.response?.data;
				console.error(error);
			})
    }, []);

    return (
        <CustomBox>
            <h3>Fetching questions</h3>
        </CustomBox>
    );
}

export default FetchQuestions