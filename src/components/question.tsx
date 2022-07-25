import { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { GetQuestion, SaveCurrentQuestion } from "../lib/questionStorage";
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import CustomBox from './customBox';
import Answer from "./answer";
import Button from "@mui/material/Button";
import QuestionFields from '../types/QuestionFields';

const Question = () => {
    let params = useParams();
    let navigate = useNavigate();
    const [questionNumber, setQuestionNumber] = useState(0);
    const [question, setQuestion] = useState<QuestionFields>();

    const GoToQuestion = (currentQuestionNumber: number) => {
        SaveCurrentQuestion(currentQuestionNumber);
        navigate(`/question/${currentQuestionNumber}`, { replace: true });
    };

    useEffect(() => {
        if(params.questionNumber)
        {
            setQuestionNumber(parseInt(params.questionNumber));
            setQuestion(GetQuestion(parseInt(params.questionNumber)));
        }
    }, [params.questionNumber]);

    return (
        <CustomBox>
            {question === undefined ?
                <h3>Loading question</h3>
                :
                <div>
                    <Stack spacing={2}>
                        <Item>{`${questionNumber} of 5 Question`}</Item>
                        <Item><h3>{`${questionNumber}. ${question?.question}`}</h3></Item>
                        {question?.answers?.answer_a !== null &&
                            <Answer text={question?.answers?.answer_a ?? ""} isCorrect={question?.correct_answers?.answer_a_correct} id={question?.id.toString()} />
                        }
                        {question?.answers?.answer_b !== null &&
                            <Answer text={question?.answers?.answer_b ?? ""} isCorrect={question?.correct_answers?.answer_b_correct} id={question?.id.toString()} />
                        }
                        {question?.answers?.answer_c !== null &&
                            <Answer text={question?.answers?.answer_c ?? ""} isCorrect={question?.correct_answers?.answer_c_correct} id={question?.id.toString()} />
                        }
                        {question?.answers?.answer_d !== null &&
                            <Answer text={question?.answers?.answer_d ?? ""} isCorrect={question?.correct_answers?.answer_d_correct} id={question?.id.toString()} />
                        }
                        {question?.answers?.answer_e !== null &&
                            <Answer text={question?.answers?.answer_e ?? ""} isCorrect={question?.correct_answers?.answer_e_correct} id={question?.id.toString()} />
                        }
                        {question?.answers?.answer_f !== null &&
                            <Answer text={question?.answers?.answer_f ?? ""} isCorrect={question?.correct_answers?.answer_f_correct} id={question?.id.toString()} />
                        }
                        <Stack>
                            {questionNumber < 5 ? 
                            <Button size="large" variant="contained" onClick={() => { GoToQuestion(questionNumber+1) }}>
                                Next Question
                            </Button>
                            :
                            <Button href="/results" size="large" variant="contained">
                            End Quiz
                            </Button>
                            }
                        </Stack>
                    </Stack>
                </div>
            }
        </CustomBox>
    );
}

export default Question