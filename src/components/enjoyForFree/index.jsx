import { CardGiftcardOutlined, SignalCellularAltOutlined } from "@mui/icons-material";
import React from "react";
import "./index.css";
import MiniVideoCard from "../miniVideoCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";

function EnjoyForFree() {
 
  const [movies, setMovies] = useContext(MovieContext);
  const trendingMovies = [movies[5], movies[9], movies[4]]; // Pega o segundo, quinto e décimo filme

  return (
    <div className="enjoyForfreeSection">
      <div className="labelSection">
        <CardGiftcardOutlined /> Aproveite grátis
      </div>
      <div className="enjoyForfreeVideosGrid">
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

export default EnjoyForFree;
