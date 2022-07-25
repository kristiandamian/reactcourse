import { Route, Routes } from 'react-router-dom';
import Difficulty from './components/difficulty';
import Home from './components/home';
import FetchQuestions from './components/fetch-questions';
import Categories from './components/categories';
import Question from './components/question';
import Results from './components/results';

const App = ():JSX.Element => {
  return (
    <div>
       <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />}/>
          <Route path="categories/:category/difficulty" element={<Difficulty />}/>
          <Route path="categories/:category/difficulty/:difficulty/questions" element={<FetchQuestions />}/>
          <Route path="question/:questionNumber" element={<Question />}/>
          <Route path="results" element={<Results />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
