import './App.scss';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const App = () => {
  const [newsStories, setNewsStories] = useState([]);
  const location = useLocation();
  const currentTopic = location.pathname.split('/');
  console.log('pathname', location.pathname)
  const [err, setError] = useState(0);

  useEffect(() => {
    if (!currentTopic[1].length > 0) {
      currentTopic[1] = 'home'
    }
    fetchData(currentTopic[1])
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return response.status
      }
    })
    .then(data => {
      setNewsStories([...data.results])
      return newsStories
    })
      .catch(error => { 
      setError(error)
      console.log('ERR', err)
      return err
    })
    console.log('STORIES', currentTopic)
  }, [location])

  const findDetails = () => {
    console.log('CURRENT', currentTopic)
    if (!currentTopic[2]) {
      return 'Loading...'
    } else {
      let article = newsStories.find(story => {
        return story.created_date === currentTopic[2]
      });
      console.log('FIND ARTICLE', article)
      return article
    }
  }

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path={`${currentTopic[1]}`} element={<Articles newsStories={newsStories} />} />
        </Route>
        <Route path={`${currentTopic[1]}/${currentTopic[2]}`} element={<ArticleDetails article={ findDetails() }/> } />
        {/* <Route path={`:topic/${currentTopic[2]}`}  element={<ArticleDetails article={ findDetails() }/> } /> */}
        <Route path='*' element={err > 0 && <p> { err } Oops, there's trouble afoot. Please try again.</p> }/>
      </Routes>
    </main>
  )
};

export default App;
