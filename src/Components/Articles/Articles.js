import './Articles.scss';
import '../ArticleSummary/ArticleSummary';
import ArticleSummary from '../ArticleSummary/ArticleSummary';

const Articles = ({ newsStories }) => {
  const news = newsStories.map((story, i) => {
    return (
      <ArticleSummary
        key={i}
        title={story.title}
        abstract={story.abstract}
        created_date={story.created_date}
        multimedia={story.multimedia}
        url={story.url}
      />
    )
  })
  return (
    <section className='articles-container'>
      { news }
    </section>
  )
};

export default Articles;