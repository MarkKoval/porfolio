import React from "react";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, IconButton } from "@mui/material";
import image from "./meflipped.png";
import backp2 from "./backp2.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FullScreenPage2 = ({ id }) => {
  const progressValues = {
    HTML: 92,
    CSS: 83,
    JavaScript: 82,
    React: 88,
  };

  return (
    <Box
      id={id}
      sx={{
        backgroundImage: `url(${backp2})`,
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
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          // alignItems: "left",
          // justifyContent: "center",
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
              // display: "flex",
              // flexDirection: "column",
              // bgcolor: "red",
            }}
          >
            <IconButton
              backgroundColor="transparent"
              // Assuming you have a Link component for navigation
              href="https://instagram.com/_vovk.mark_"
              target="_blank"
              sx={{
                my: 2,
                color: "white",
              }} // Add vertical spacing between icons
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
          xs={5.25}
          md={5.25}
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
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              ml: "6.5rem",
            }}
          >
            <Typography
              color="white"
              sx={{
                fontFamily: "ubuntu",
                fontSize: "3rem",
                fontWeight: "800",
                width: "46rem",
                userSelect: "none",
                color: "#E5E4E2",
                textTransform: "uppercase",
              }}
            >
              i am front end developer
            </Typography>
            <Typography
              color="white"
              nowrap={true}
              sx={{
                fontFamily: "ubuntu",
                fontSize: "1rem",
                fontWeight: "400",
                width: "46rem",
                userSelect: "none",
                color: "#E5E4E2",
                // textTransform: "uppercase",
              }}
            >
              Developer with eager to contribute to the team's success through
              hard work, attention to details, and excellent organizational
              skills. Highly motivated to learn new technologies, grow, and
              excel in Front-End Developing.
            </Typography>
            <Box className="progressbars">
              {Object.entries(progressValues).map(([label, value]) => (
                <div key={label} className="progressbar-item">
                  <Typography
                    style={{
                      userSelect: "none",
                      textTransform: "uppercase",
                      fontFamily: "ubuntu",
                      position: "absolute",
                      color: "#E5E4E2",
                      fontSize:"1.25rem",
                      fontWeight:"400",
                    }}
                  >{`${value.toFixed(0)}%`}</Typography>
                  <LinearProgress
                    value={value}
                    variant="determinate"
                    sx={{
                      height: "0.5rem",
                      borderRadius: "0.25rem",
                      mt: "2rem",
                      mb: "1rem",
                      backgroundColor: "#303030",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#E5E4E2",
                      },
                    }}
                  />
                  <Typography
                    style={{
                      fontSize:"1.5rem",
                      fontWeight:"400",
                      fontFamily: "ubuntu",
                      userSelect: "none",
                      textTransform: "uppercase",
                      justifyContent: "right",
                      display: "flex",
                      marginLeft: 8,
                      color: "#E5E4E2",
                    }}
                  >
                    {label}
                  </Typography>
                </div>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={5.25}
          md={5.25}
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
              transform: [{ rotateY: "90deg" }],
              ml: "5rem",
              display: "flex",
              flexDirection: "raw",
              alignItems: "center",
            }}
          >
            {/* <Blob style={{ height: "50rem", width: "auto",  }}/> */}

            <img
              src={image}
              style={{
                height: "50rem",
                width: "auto",
                position: "absolute",
              }}
            />
          </Box>
        </Grid>
        <Grid
          xs={1}
          md={1}
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            // justifyContent: "right",
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

export default FullScreenPage2;
