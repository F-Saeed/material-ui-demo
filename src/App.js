import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Posts from './routes/Posts';
import Comments from './routes/Comments';
import Users from './routes/Users';
import Home from './routes/Home';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/posts' element={<Posts />} />
        <Route exact path='/comments' element={<Comments />} />
        <Route exact path='/Users' element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
