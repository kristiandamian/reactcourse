import Box from '@mui/material/Box';

const CustomBox = (props:any):JSX.Element => {
    return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{ bgcolor: '#cfe8fc'}}>
          {props?.children}
        </Box>
    );
  }
  
  export default CustomBox;