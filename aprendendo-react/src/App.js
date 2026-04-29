import BlogDetails from './BlogDetails';
import Create from './Create';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Home from './home';
import{ BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  // const title = 'Welcome';
  // const likes = 50;
  // const link = 'http://www.google.com'
  return (
    <Router>
    <div className='App'>
      <Navbar/>
      <div className='content'>
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/blogs/:id' element={<BlogDetails/>}/>
                <Route path='*' element={<NotFound/>}></Route>
          </Routes>
      </div>
    </div>
    
   </Router>
  );
}

export default App;
