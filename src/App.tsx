import { Route, Routes } from 'react-router-dom';
import Difficulty from './components/difficulty';
import Home from './components/home';
import Questions from './components/questions';
import Categories from './components/categories';

const App = ():JSX.Element => {
  return (
    <div>
       <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />}/>
          <Route path="categories/:category/difficulty" element={<Difficulty />}/>
          <Route path="categories/:category/difficulty/:difficulty/questions" element={<Questions />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
