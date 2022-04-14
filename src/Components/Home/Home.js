import './Home.scss';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import Articles from '../Articles/Articles';
import { Link } from 'react-router-dom';


const Home = () => {
  const topics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];
  const topicsDisplay = topics.map((topic, i) => {
    return (
      <Link to={topic}>
        <p key={ i }>{ topic }</p>
      </Link>
    )
  })

  const [newsStories, setNewsStories] = useState([]);
  const [topic, setTopic] = useState('home')
  // const [err, setError] = useState(0);

  useEffect (() => {
    fetchData(topic)
      .then(data => {
        setNewsStories([...data.results])
        return newsStories
      })
      
    console.log('useEffect', newsStories)
  }, [])

  return (
    <section>
      <nav>
        { topicsDisplay }
      </nav>
      <Articles newsStories={newsStories} />
    </section>
  )
};

export default Home;