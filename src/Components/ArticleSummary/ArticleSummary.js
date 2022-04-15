import './ArticleSummary.scss';
import { Link } from 'react-router-dom';

const ArticleSummary = ({ url, title, abstract, created_date, multimedia }) => {
  if (url === 'null' || !title) {
    console.log('SKIP')
  } else {
    return (
      <article className='article-card'>
        <Link to={`${created_date}`}>
          <h3>{title}</h3>
          <p>{abstract}</p>
          {multimedia?<img src={multimedia[2].url} alt={multimedia[2].caption} />:<p>No Image Available</p>}
        </Link>
      </article>
    )
  }
};

export default ArticleSummary;