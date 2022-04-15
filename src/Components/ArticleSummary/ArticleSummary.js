import './ArticleSummary.scss';
import { Link } from 'react-router-dom';

const ArticleSummary = ({ url, title, abstract, created_date, multimedia, section }) => {
  console.log('summary location', )
  if (url === 'null' || !title) {
    console.log('SKIP')
  } else {
    return (
      <Link
        to={`${created_date}`}
        className='article-card'>
        <div className='title-details'>
          <h3>{title}</h3>
          <p>{abstract}</p>
        </div>
        <div className='thumbnail'>
          {multimedia?<img src={multimedia[2].url} alt={multimedia[2].caption} />:<p>No Image Available</p>}
        </div>
      </Link>
    )
  }
};

export default ArticleSummary;