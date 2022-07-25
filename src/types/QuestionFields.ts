import AnswersFields from "./AnswersFields";
import CorrectAnswersFields from "./CorrectAnswersFields";

export default interface QuestionFields {
    id: Number,
    question: string, 
    description: string|undefined,
    answers: AnswersFields,
    multiple_correct_answers: boolean,
    correct_answers: CorrectAnswersFields,
    correct_answer: string|undefined,
    explanation: string|undefined,
    tip: string|undefined,
    category: string,
    difficulty: string,
}

