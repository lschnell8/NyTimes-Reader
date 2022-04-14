import './App.scss';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const App = () => {
  const [newsStories, setNewsStories] = useState([]);
  const [err, setError] = useState(0);

  useEffect (() => {
    fetchData('home')
      .then(data => {
        setNewsStories([...data.results])
        return newsStories
      })
      .catch(error => {
        setError(error.status)
        console.log(err)
        return err
      })
    console.log('useEffect', newsStories)
  }, [])

  return (
    <main>
      {console.log('Render', newsStories)}
      <Header />
      <Routes>
        <Route path='/' element={ <Home newsStories={newsStories} /> } />
        <Route path='details' element={ <ArticleDetails /> } />
      </Routes>
    </main>
  )
};

export default App;
