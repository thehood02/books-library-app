import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Books from "./pages/Books";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:subject" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;