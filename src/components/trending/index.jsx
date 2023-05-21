import { SignalCellularAltOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import "./index.css";
import MiniVideoCard from "../miniVideoCard";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";

function Trending() {
  const [movies, setMovies] = useContext(MovieContext);
  const trendingMovies = [movies[1], movies[4], movies[9]]; // Pega o segundo, quinto e décimo filme

  return (
    <div className="trendingSection">
      <div className="labelSection">
        <SignalCellularAltOutlined /> Em alta
      </div>
      <div className="trendingVideosGrid">
        {trendingMovies.map((movie) => (
          <Link style={{
            textDecoration: "none",
            color: "#EEEEEE",
          }} to={`/Movie/${movie._id}`} key={movie.title}>
            <MiniVideoCard img={movie.image} title={movie.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Trending;

