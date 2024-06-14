import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  console.log(location);
  return <h1>Home Page</h1>;
};

export default Home;
