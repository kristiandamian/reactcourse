import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClearStorage, GetCurrentQuestion } from '../lib/questionStorage';
import Button from '@mui/material/Button';
import CustomBox from './customBox';

const Home = ():JSX.Element => {
  let navigate = useNavigate();
  let currentQuestionNumber =GetCurrentQuestion();
	useEffect(() => {
    console.log(currentQuestionNumber)

    if(currentQuestionNumber !== 5)
      navigate(`/question/${currentQuestionNumber}`, { replace: true });
    else
      ClearStorage();
  }, []);



    return (
      <div>
        <CustomBox>
          <Button href="categories" size="large" variant="contained">
              Start Quiz
          </Button>
        </CustomBox>
      </div>
    );
  }
  
  export default Home;