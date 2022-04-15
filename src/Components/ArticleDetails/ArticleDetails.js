import './ArticleDetails.scss';

const ArticleDetails = ({ article }) => {
  return (
    <section className='article-details'>
      <article className='image-and-caption'>
        <img src={`${article.multimedia[1].url}`} alt={`${article.multimedia[1].caption}`} />
        <div className='photo-caption'>
          <small>{article.multimedia[1].caption}</small><br></br>
          <small>© {article.multimedia[1].copyright}</small>
        </div>
      </article>
      <article className='title-and-more'>
        <h2>{article.title}</h2>
        <p>{article.byline}</p>
        <p className='published'>Published On: {article.published_date}</p>
        <button onClick={() => window.open(`${article.url}`, '_blank')}>Read Full Article</button>
      </article>
    </section>
  )
};

export default ArticleDetails;