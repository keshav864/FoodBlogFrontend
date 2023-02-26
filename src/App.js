import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Food from './components/food';
import Navbar from "./components/navbar";
import AddPost from './components/addPost';
import SinglePost from './components/singlePost';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/food" element={<Food />} />
          <Route path="/food/:id" element={<SinglePost />} />
          <Route path='/add-post' element={<AddPost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
