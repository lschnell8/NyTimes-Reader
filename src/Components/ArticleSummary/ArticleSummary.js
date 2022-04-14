import './ArticleSummary.scss';
import { Link } from 'react-router-dom';

const ArticleSummary = ({ title, abstract, subsection }) => {
  return (
      <Link to={ subsection }>
      <h2>{ title }</h2>
      <p>{ abstract }</p>
      </Link>
  )
};

export default ArticleSummary;