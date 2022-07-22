import Button from "@mui/material/Button";
import { Fragment } from "react";
import AnswerFields from '../types/Answer';

const Answer = ({text, isCorrect}: AnswerFields) => {
    return (
        <Fragment>
            <Button variant="contained">{text}</Button>
        </Fragment>
    );
}

export default Answer