import './Home.scss';
import Topics from '../Topics/Topics';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <section className='body'>
      <Topics />
      <Outlet />
    </section>
  )
};

export default Home;