import './Home.scss';
import Articles from '../Articles/Articles';
import { Link } from 'react-router-dom';


const Home = ({ newsStories }) => {
  const topics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];
  const topicsDisplay = topics.map((topic, i) => {
    return (
      <Link to={topic}>
        <p key={ i }>{ topic }</p>
      </Link>
    )
  })

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