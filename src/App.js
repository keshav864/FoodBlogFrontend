import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Navbar from "./components/navbar";
import AddPost from './components/addPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-post' element={<AddPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
