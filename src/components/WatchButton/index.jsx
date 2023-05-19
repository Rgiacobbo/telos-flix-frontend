import React from "react";
import PrimaryGradientButton from "../primaryGrandientButton";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

export default function WatchButton() {
  return <PrimaryGradientButton  text="Assistir" icon={<PlayArrowOutlinedIcon />} />;
}
