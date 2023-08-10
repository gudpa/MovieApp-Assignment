import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Movie from "./pages/Movie";
import List from "./pages/List";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="movie/:id" element={<Movie />} />
        <Route path="/" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
