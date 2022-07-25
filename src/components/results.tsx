import { useEffect, useState } from "react";
import { ClearStorage, GetRightAnswers } from "../lib/questionStorage";
import Button from "@mui/material/Button/Button";
import CustomBox from "./customBox";
import Stack from "@mui/material/Stack/Stack";
import Item from '@mui/material/Stack';

const Results = () => {
    const [rightAnswers, setRightAnswers] = useState(0);

    useEffect(() => {
        setRightAnswers(GetRightAnswers());
    }, []);

    return (
        <CustomBox>
            <Stack spacing={2} alignItems="center">
                <Item>
                    <h3>You've completed the Quiz!</h3>
                </Item>
                <Item>
                    <h4>{`You scored ${rightAnswers} out of 5`}</h4>
                </Item>
                <Item>
                    <Button href="/" size="large" variant="contained">Play again</Button>
                </Item>
           </Stack>
        </CustomBox>
    );
}

export default Results
