import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const App = ():JSX.Element => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ bgcolor: '#cfe8fc'}}>
        <Button variant="contained">Start Quiz</Button>
      </Box>
    </div>
  );
}

export default App;
