import {BrowserRouter, Link, Routes, Route} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Books from "./pages/Books";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link className="App-link" to="/">
              Home
            </Link>
            <Link className="App-link" to="/books">
              Books
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
