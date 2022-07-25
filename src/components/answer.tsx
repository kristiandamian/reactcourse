import { useEffect, useState } from "react";
import { QuestionAnswered, SaveRightAnswer, SetQuestionAnswered } from '../lib/questionStorage';
import Button from "@mui/material/Button";
import Item from '@mui/material/Stack';
import AnswerFields from "../types/Answer";

const Answer = ({id, text, isCorrect}: AnswerFields) => {
    const [selectedAnswer, setSelectedAnswer] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(false);

    const VerifyAnswer = () => {
        setSelectedAnswer(true);
        console.log(String(isCorrect))

        if(String(isCorrect) === "true") {
            setCorrectAnswer(true);
            if(!QuestionAnswered(id)) { 
                SetQuestionAnswered(id);
                SaveRightAnswer();
            }
        }
    };

    useEffect(() => {
        setSelectedAnswer(false);
        setCorrectAnswer(false);
    }, [id]);

    return (
        <Item>
            <Button variant={ selectedAnswer ? "contained": "outlined"} onClick={VerifyAnswer} color={selectedAnswer ? correctAnswer ? "success" : "error" : "primary"}>{text}</Button>
        </Item>
    );
}

export default Answer