import { Box } from "@mui/material";
import ResponsiveAppBar from "./AppBar";
import FullScreen from "./FullScreen";

export default function Root() {
  return (
    <Box
      style={{
        margin: 0,
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')
      </style>
      <ResponsiveAppBar />
      <FullScreen />
    </Box>
  );
}
