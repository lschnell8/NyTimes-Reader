import './ArticleSummary.scss';
import { Link } from 'react-router-dom';

const ArticleSummary = ({ url, title, abstract, created_date, multimedia }) => {
  if (url === 'null' || !title) {
    console.log('SKIP')
  } else {
    return (
      <Link to={`${created_date}`}>
        <h2>{title}</h2>
        <p>{abstract}</p>
        {multimedia?<img src={multimedia[2].url} alt={multimedia[2].caption} />:<p>No Image Available</p>}
      </Link>
    )
  }
};

export default ArticleSummary;