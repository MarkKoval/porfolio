import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Button, IconButton } from "@mui/material";

export default function Links() {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        top: "25%",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "20px",
        marginBottom: "15px",
      }}
    >
      <IconButton
        color="white"
        backgroundColor="white"
        href="https://instagram.com/your-instagram-handle"
        sx={{ my: 2, color: "#fff", boxShadow: 24 }}
      >
        <InstagramIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://linkedin.com/in/your-linkedin-profile"
        sx={{ my: 2, color: "#fff", boxShadow: 24 }}
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://github.com/your-github-username"
        sx={{ my: 2, color: "#fff", boxShadow: 24 }}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://t.me/your-telegram-username"
        sx={{ my: 2, color: "#fff", boxShadow: 24 }}
      >
        <TelegramIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
