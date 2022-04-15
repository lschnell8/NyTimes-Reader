import './ArticleDetails.scss';
// import { Link } from 'react-router-dom';

const ArticleDetails = ({ article }) => {
  console.log('DETAILS', article)
  return (
    <section>
      <h2>{article.title}</h2>
          <section>
            <img src={`${article.multimedia[1].url}`} alt={`${article.multimedia[1].caption}`} />
            <p>{article.multimedia[1].caption}</p>
            <p>{article.multimedia[1].copyright}</p>
          </section>
      <p>{article.byline}</p>
      <p>{article.published_date}</p>
      {/* <Link reloadDocument replace={article.url}>
        <p>{article.url}</p>
      </ Link> */}
       <a target='_blank' rel='noreferrer' href={`${article.url}`}>{`${article.url}`}</a>
      {/* <Link to={`${article.url}`} target='_blank' rel='noreferrer' >{`${article.url}`}</Link> */}
    </section>
  )
};

export default ArticleDetails;