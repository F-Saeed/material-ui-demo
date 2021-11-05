import { useState } from 'react';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import { Routes, Route } from 'react-router-dom';
import Posts from './routes/Posts';
import Comments from './routes/Comments';
import Users from './routes/Users';
import Home from './routes/Home';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className='App'>
      <Navbar setDrawerOpen={setDrawerOpen} />
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/posts' element={<Posts />} />
        <Route exact path='/comments' element={<Comments />} />
        <Route exact path='/users' element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
