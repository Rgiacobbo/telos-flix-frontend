import React from "react";
import "./index.css";
function MiniVideoCard({ title, img }) {
  return <div className="miniVideoCard" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover",
  backgroundPosition: "center",}}>{title}</div>;
}

export default MiniVideoCard;
