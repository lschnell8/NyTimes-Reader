import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <Link to='/'>
        <h1>NY TIMES READER</h1>
      </Link>
  )
};

export default Header;