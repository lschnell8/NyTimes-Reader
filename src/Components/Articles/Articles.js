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
        subsection={story.subsection}
      />
    )
  })
  return (
    <section>
      { news }
    </section>
  )
};

export default Articles;