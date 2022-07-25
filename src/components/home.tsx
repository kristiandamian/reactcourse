import Button from '@mui/material/Button';
import { ClearStorage } from '../lib/questionStorage';
import CustomBox from './customBox';

const Home = ():JSX.Element => {
    ClearStorage();
    
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