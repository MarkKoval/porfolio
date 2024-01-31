/* eslint-disable */
import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import backp3 from "./backp3.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenPage3 = ({ id }) => {
  const toggleDialog = (skillKey, isOpening) => {
    console.log(`toggleDialog called for ${skillKey}, isOpening: ${isOpening}`);
    switch (skillKey) {
      case "SmartVolunteers":
        setOpenSmartVolunteers(isOpening);
        break;

      default:
        console.error(`Unknown skill: ${skillKey}`);
    }
  };

  const [openSmartVolunteers, setOpenSmartVolunteers] = React.useState(false);


  const previews = {
    SmartVolunteers: {
      Name: "Smart Volunteers",
      open: openSmartVolunteers,
      bgcolor: "#87BEE7",
      hover: "#3c99de",
      ifame: "https://smart-volunteers.onrender.com/",
    },
  };

  return (
    <Box
      id={id}
      sx={{
        backgroundImage: `url(${backp3})`,
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
          container
          xs={10.5}
          md={10.5}
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "ubuntu",
                fontSize: "4rem",
                fontWeight: "800",
                width: "46rem",
                userSelect: "none",
                color: "#E5E4E2",
                textTransform: "uppercase",
              }}
            >
              works
            </Typography>
          </Grid>
          <Grid
            container
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Grid
              xs={10.5}
              md={10.5}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",

                flexDirection: "row",
              }}
            >
              {Object.keys(previews).map((previewKey) => {
                const preview = previews[previewKey];
                return (
                  <Grid
                    item
                    xs={4}
                    md={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      p: 2,
                    }}
                    key={preview.Name}
                  >
                    <Button
                    sx={{
                        width: "100%",
                        height: "14rem",
                        fontFamily: "ubuntu",
                        fontSize: "2.2rem",
                        fontWeight: "1000",
                        userSelect: "none",
                        color: "#E5E4E2",
                        textTransform: "uppercase",
                        mx: 4,
                        my: 3,
                        borderRadius: 8,
                        backgroundColor: preview.bgcolor,
                        position: "relative",
                        transition:
                          "background-color 1s ease-in-out, font-size 1s ease-in-out", 
                        "&:hover": {
                          backgroundSize: "cover", 
                          backgroundPosition: "center", 
                          backgroundColor: preview.hover, 
                          fontSize: "2.5rem",
                          "&::before": {
                            content: "'Preview'",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#E5E4E2",
                            zIndex: 1,
                            opacity: 0, // Start with opacity 0
                            transition: "opacity 1s ease-in-out",
                          },
                          "&:hover::before": {
                            opacity: 1,
                          },
                          "&:hover .content": {
                            transform: "scale(1.3)", // Apply scale transform on hover
                            transition: "transform 1s ease-in-out", 
                          },
                        },
                      }}
                      key={preview.Name}
                      onClick={() => toggleDialog(previewKey, true)}
                    >
                      {preview.Name}

                      <Dialog
                        PaperProps={{
                          style: {
                            backgroundColor: "black",
                            boxShadow: "none",
                          },
                        }}
                        fullScreen
                        open={preview.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => toggleDialog(previewKey, false)}
                      >
                        <DialogTitle
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
                          {preview.Name}
                        </DialogTitle>
                        <DialogContent
                          sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <iframe
                            src={preview.iframe}
                            width="100%"
                            height="100%"
                          />
                        </DialogContent>
                        <DialogActions textAlign="center">
                          <div style={{ flex: "1 0 0" }} />
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleDialog(previewKey, false);
                            }}
                            variant="contained"
                            sx={{
                              mb: 5,
                              width: "7.5%",
                              borderRadius: 8,
                              backgroundColor: "#3D685F",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "ubuntu",
                                fontSize: "1.3rem",
                                fontWeight: "600",
                                userSelect: "none",
                                color: "#E5E4E2",
                                textTransform: "uppercase",
                              }}
                            >
                              close
                            </Typography>
                          </Button>
                          <div style={{ flex: "1 0 0" }} />
                        </DialogActions>
                      </Dialog>
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
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

export default FullScreenPage3;
