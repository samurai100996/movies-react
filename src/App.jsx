import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import Movie from "./pages/Movies";
import Header from "./components/Header";
import HomeHeroSection from "./components/HomeHeroSection";
function App() {
  return (
    <BrowserRouter>
    <Header>
   </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-movies" element={<AllMovies />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    
    
    </BrowserRouter> 
  );
}

export default App;

// react-router-dom