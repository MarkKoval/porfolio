import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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
      case "Studio":
        setOpenStudio(isOpening);
        break;
      case "Web":
        setOpenWeb(isOpening);
        break;
      case "Design":
        setOpenDesign(isOpening);
        break;
      case "Developing":
        setOpenDeveloping(isOpening);
        break;
      case "Tools":
        setOpenTools(isOpening);
        break;
      case "Interactive":
        setOpenInteractive(isOpening);
        break;
      default:
        console.error(`Unknown skill: ${skillKey}`);
    }
  };

  const [openStudio, setOpenStudio] = React.useState(false);
  const [openWeb, setOpenWeb] = React.useState(false);
  const [openDesign, setOpenDesign] = React.useState(false);
  const [openDeveloping, setOpenDeveloping] = React.useState(false);
  const [openTools, setOpenTools] = React.useState(false);
  const [openInteractive, setOpenInteractive] = React.useState(false);

  const skills = {
    Studio: {
      Name: "Studio",
      open: openStudio,
      bgcolor: "#87BEE7",
      hover: "#3c99de",
      CardsContent: [
        {
          image: "https://picsum.photos/200",
          title: "Photography",
        },
        {
          image: "https://picsum.photos/200",
          title: "Video Editing",
        },
        {
          image: "https://picsum.photos/200",
          title: "Lighting",
        },
        {
          image: "https://picsum.photos/200",
          title: "Sound Design",
        },
        {
          image: "https://picsum.photos/200",
          title: "Set Construction",
        },
      ],
    },
    Web: {
      Name: "Web",
      open: openWeb,
      bgcolor: "#3D685F",
      hover: "#0f8a70",
      CardsContent: [
        {
          image: "https://picsum.photos/200",
          title: "HTML",
        },
        {
          image: "https://picsum.photos/200",
          title: "CSS",
        },
        {
          image: "https://picsum.photos/200",
          title: "JavaScript",
        },
        {
          image: "https://picsum.photos/200",
          title: "React",
        },
        {
          image: "https://picsum.photos/200",
          title: "Node.js",
        },
      ],
    },
    Design: {
      Name: "Design",
      open: openDesign,
      bgcolor: "#DE2461",
      hover: "#b01e4e",
      CardsContent: [
        {
          image: "https://picsum.photos/200",
          title: "Adobe Photoshop",
        },
        {
          image: "https://picsum.photos/200",
          title: "Adobe Illustrator",
        },
        {
          image: "https://picsum.photos/200",
          title: "Sketching",
        },
        {
          image: "https://picsum.photos/200",
          title: "Branding",
        },
        {
          image: "https://picsum.photos/200",
          title: "Typography",
        },
      ],
    },
    Developing: {
      Name: "Developing",
      open: openDeveloping,
      bgcolor: "#FDA381",
      hover: "#f2794b",
      CardsContent: [
        {
          image: "https://picsum.photos/200",
          title: "Python",
        },
        {
          image: "https://picsum.photos/200",
          title: "Java",
        },
        {
          image: "https://picsum.photos/200",
          title: "C#",
        },
        {
          image: "https://picsum.photos/200",
          title: "Database Design",
        },
        {
          image: "https://picsum.photos/200",
          title: "Algorithm Optimization",
        },
      ],
    },
    Tools: {
      Name: "Tools",
      open: openTools,
      bgcolor: "#66C993",
      hover: "#2d8756",
      CardsContent: [
        {
          image: "https://picsum.photos/200",
          title: "Version Control",
        },
        {
          image: "https://picsum.photos/200",
          title: "Containerization",
        },
        {
          image: "https://picsum.photos/200",
          title: "Cloud Services",
        },
        {
          image: "https://picsum.photos/200",
          title: "CI/CD Pipelines",
        },
        {
          image: "https://picsum.photos/200",
          title: "Monitoring Tools",
        },
      ],
    },
    Interactive: {
      Name: "Interactive",
      open: openInteractive,
      bgcolor: "#AD9FF4",
      hover: "#7466ba",
      CardsContent: [
        {
          image: "https://picsum.photos/200",
          title: "UI/UX Design",
        },
        {
          image: "https://picsum.photos/200",
          title: "Animation",
        },
        {
          image: "https://picsum.photos/200",
          title: "User Testing",
        },
        {
          image: "https://picsum.photos/200",
          title: "Prototyping",
        },
        {
          image: "https://picsum.photos/200",
          title: "Wireframing",
        },
      ],
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
              skills
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
              {Object.keys(skills).map((skillKey) => {
                const skill = skills[skillKey];
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
                    key={skill.Name}
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
                        backgroundColor: skill.bgcolor,
                        position: "relative",
                        transition:
                          "background-color 1s ease-in-out, font-size 1s ease-in-out",
                        "&:hover": {
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundColor: skill.hover,
                          fontSize: "2.8rem",
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
                            transition: "transform 1s ease-in-out", // Add transition to content
                          },
                        },
                      }}
                      key={skill.Name}
                      onClick={() => toggleDialog(skillKey, true)}
                    >
                      {skill.Name}

                      <Dialog
                        PaperProps={{
                          style: {
                            backgroundColor: "black",
                            boxShadow: "none",
                          },
                        }}
                        fullScreen
                        open={skill.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => toggleDialog(skillKey, false)}
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
                          {skill.Name} Skills
                        </DialogTitle>
                        <DialogContent
                          sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Grid
                            container
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid
                              spacing={4}
                              container
                              xs={10}
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              {skill.CardsContent.map((card, index) => (
                                <Grid
                                  item
                                  xs={12}
                                  sm={6}
                                  md={4}
                                  lg={3}
                                  xl={2}
                                  key={index}
                                >
                                  <Card
                                    sx={{
                                      borderRadius: "1rem",
                                      width: "100%",

                                      userSelect: "none",
                                    }}
                                  >
                                    <CardActionArea>
                                      <CardMedia
                                        component="img"
                                        height="100%"
                                        image={card.image}
                                        alt={card.title}
                                        sx={{ userSelect: "none" }}
                                      />
                                      <CardContent>
                                        <Typography
                                          sx={{
                                            fontFamily: "ubuntu",
                                            fontSize: "1rem",
                                            fontWeight: "1000",
                                            userSelect: "none",
                                            color: "black",
                                            textTransform: "uppercase",
                                          }}
                                        >
                                          {card.title}
                                        </Typography>
                                      </CardContent>
                                    </CardActionArea>
                                  </Card>
                                </Grid>
                              ))}
                            </Grid>
                          </Grid>
                        </DialogContent>
                        <DialogActions textAlign="center">
                          <div style={{ flex: "1 0 0" }} />
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleDialog(skillKey, false);
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
