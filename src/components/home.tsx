import Button from '@mui/material/Button';
import CustomBox from './customBox';

const Home = ():JSX.Element => {
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