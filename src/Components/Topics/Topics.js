import { Link } from 'react-router-dom';

const Topics = () => {
  const topics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];
  const topicsDisplay = topics.map((topic, i) => {
    return (
      <Link to={topic} key={i}>
        <p>{topic}</p>
      </Link>
      )
    })
  return (
    <section className='article-topics'>
      <h2>Topics</h2>
      <nav>
        { topicsDisplay }
      </nav>
    </section>
  )
};

export default Topics;