import './Articles.scss';
import '../ArticleSummary/ArticleSummary';
import ArticleSummary from '../ArticleSummary/ArticleSummary';

const Articles = (stories) => {
  const news = stories.map(story => {
    return (
      <ArticleSummary key={ story.id } title={ story.title } details={ story.details } />
    )
  })
  return (
    <section>
      { news }
    </section>
  )
};

export default Articles;