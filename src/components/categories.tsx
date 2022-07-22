import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import CustomBox from './customBox';

const Categories = ():JSX.Element => {
    let categories = ["Linux", "DevOps", "Networking", "Cloud", "Docker", "Kubernetes", "All"];
    
    return (
      <CustomBox>
         <Stack spacing={2}>
            <Item><h1>Select the category</h1></Item>
            {categories.map(t =>
                <Button href={`categories/${t}/difficulty`} size="large" variant="contained" key={t}>
                    {t}
                </Button>)}
         </Stack>
      </CustomBox>
    );
  }
  
  export default Categories;