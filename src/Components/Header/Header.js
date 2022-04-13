import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <Routes>
      <Link to='/'>
        <h1>NY TIMES READER</h1>
      </Link>
    // </Routes>
  )
};

export default Header;