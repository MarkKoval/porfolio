/* eslint-disable */
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import image from "./me.png";
import backp1 from "./backp1.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FullScreenPage1 = ({ id }) => {
  return (
    
    <Box
      id={id}
      sx={{
        backgroundImage: `url(${backp1})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid
        container
        sx={{
          scrollSnapAlign: "start",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <Grid
          xs={0.5}
          md={0.5}
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "2.5rem",
              ml: "1.5rem",
            }}
          >
            <IconButton
              backgroundColor="transparent"
              href="https://instagram.com/_vovk.mark_"
              target="_blank"
              sx={{
                my: 2,
                color: "white",
              }}
            >
              <InstagramIcon fontSize="md" />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/kovalmark"
              target="_blank"
              sx={{
                my: 2,
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
                color: "white",
              }}
            >
              <LinkedInIcon fontSize="md" bgcolor="transparent" />
            </IconButton>
            <IconButton
              href="https://github.com/MarkKoval"
              target="_blank"
              sx={{
                my: 2,
                color: "white",
              }}
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>
            <IconButton
              href="https://t.me/vovkmark"
              target="_blank"
              sx={{
                my: 2,
                color: "white",
              }}
            >
              <TelegramIcon fontSize="md" />
            </IconButton>
          </Box>
        </Grid>
        <Grid
          xs={10.5}
          md={10.5}
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              ml: "6rem",
              display: "flex",
              flexDirection: "raw",
              alignItems: "center",
            }}
          >
            <img
              alt="image"
              src={image}
              style={{
                height: "50rem",
                width: "auto",
                position: "absolute",
                pl: "10rem",
              }}
            />
            <Box
              sx={{
                textAlign: "left",
                ml: "38rem",
                position: "relative",
              }}
            >
              <Typography
                color="white"
                sx={{
                  height: "10rem",
                  fontFamily: "ubuntu",
                  fontSize: "8rem",
                  fontWeight: "800",
                  width: "46rem",
                  userSelect: "none",
                  color: "#E5E4E2",
                  textTransform: "uppercase",
                }}
              >
                creative
              </Typography>
              <Typography
                color="white"
                sx={{
                  letterSpacing: "2.65rem",
                  height: "8rem",
                  fontFamily: "ubuntu",
                  fontSize: "3rem",
                  fontWeight: "600",
                  userSelect: "none",
                  width: "46rem",
                  color: "#E5E4E2",
                  textTransform: "uppercase",
                }}
              >
                developer
              </Typography>
              <Typography
                color="white"
                sx={{
                  textTransform: "uppercase",
                  alignSelf: "flex-end",
                  letterSpacing: "0.17rem",

                  userSelect: "none",
                  fontFamily: "IBM Plex Mono",
                  fontSize: "3rem",
                  fontWeight: "200",
                  width: "46rem",
                  color: "#E5E4E2",
                }}
              >
                sensible to frontend
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={1}
          md={1}
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            pt: "50rem",
          }}
        >
          <Box
            id="rotate"
            sx={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{ display: "inline-block" }}
              sx={{
                color: "#E5E4E2",
                fontFamily: "ubuntu",
                textTransform: "uppercase",
                width: "7rem",
                fontSize: "1.3rem",
                letterSpacing: "1rem",
                fontWeight: "500",
                userSelect: "none",
              }}
            >
              sroll down
            </Typography>

            <ArrowForwardIcon sx={{ color: "white", ml: "2rem" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FullScreenPage1;
