import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import { useParams } from "react-router-dom";
import CustomBox from './customBox';

const Difficulty = ():JSX.Element => {
    let difficulty = ["Easy", "Medium", "Hard", "All"];
    let params = useParams();

    return (
      <CustomBox>
         <Stack spacing={2}>
            <Item key="title"><h1>Select difficulty for {params.category} questions</h1></Item>

            {difficulty.map(t =>
                <Item key={t}> 
                    <Button href={`difficulty/${t}/questions`} size="large" variant="contained" key={t}>
                        {t}
                    </Button>
                </Item>)}
         </Stack>
      </CustomBox>
    );
  }
  
  export default Difficulty;