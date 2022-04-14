import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/:id' element={ <ArticleDetails /> } />
      </Routes>
    </main>
  )
};

export default App;
