import './App.scss';
import { useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Articles from '../Articles/Articles';

const App = () => {

  useEffect (() => {
    fetchData('world')
      .then(response => {
        if (response.ok) {
          console.log(response)
          return response.json();
        } else {
          console.log(response.status)
          return response.status
      }
      })
      .then(data => {
      console.log(data.results)
      })
      .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <Routes>
        <Route path='/' element={ <Header /> } />
        <Route path='/' element={ <Articles /> } />
        <Route path='details' element={ <ArticleDetails /> } />
    </Routes>
  )
};

export default App;
