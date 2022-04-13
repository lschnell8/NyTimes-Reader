import './ArticleSummary.scss';
import { Link } from 'react-router-dom';

const ArticleSummary = () => {
  return (
      <Link path='details'>
        <h2>Article Title</h2>
        <p>details</p>
      </Link>
  )
};

export default ArticleSummary;