import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Create from './pages/create/Create';

import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
