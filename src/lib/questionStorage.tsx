import QuestionFields from "../types/QuestionFields";

let questionsKey = "questions";
let currentQuestionsKey = "currentQuestions";
let answersKey = "rightAnswers";
let answeredQuestion = "answeredQuestion";

export const SaveQuestions = (questions:string) => {
    localStorage.setItem(questionsKey, questions);
} 

export const GetQuestion = (questionNumber: number): QuestionFields|undefined => {
    var questionsLocal = localStorage.getItem(questionsKey);
    var question: QuestionFields|undefined = undefined;
    if(questionsLocal)
    {
        var questions = JSON.parse(questionsLocal) as QuestionFields[];
        if(questionNumber <= questions.length)
            question = questions[questionNumber-1];
    }

    return question;
}

export const SaveCurrentQuestion = (questionNumber:number) => {
    localStorage.setItem(currentQuestionsKey, questionNumber.toString());
} 

export const GetCurrentQuestion = () => {
    var currentQuestion = 0;
    var questionLocal = localStorage.getItem(currentQuestionsKey);
    if(questionLocal)
        currentQuestion = parseInt(questionLocal)

    return currentQuestion;
} 

export const GetRightAnswers = (): number => {
    var rightAnswers = 0;
    var answersLocal = localStorage.getItem(answersKey);
    if(answersLocal)
        rightAnswers = parseInt(answersLocal)

    return rightAnswers;
}

export const SaveRightAnswer = () => {
    var rightAnswers = GetRightAnswers();
    rightAnswers++;
    localStorage.setItem(answersKey, rightAnswers.toString());
}

export const SetQuestionAnswered = (questionNumber:string) => {
    localStorage.setItem(answeredQuestion+questionNumber, "answered");
}
export const QuestionAnswered = (questionNumber:string): boolean => {
    var answered = localStorage.getItem(answeredQuestion+questionNumber);
    console.log(questionNumber)
    console.log(answered)
    return answered !== null;
}

export const ClearStorage = () => {
    localStorage.clear();
}
