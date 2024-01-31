import React, { useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import backp1 from "./backp1.svg";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import axios from "axios";

const FullScreenPage5 = ({ id }) => {
  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Email: email,
      Message: message,
    };

    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/bbe3f273-3fdf-4d54-9b41-f9e79eb03804",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setName("");
      setEmail("");
      setMessage("");
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Data:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", error.message);
      }
    }
  };

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
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              my: "2rem",
              fontFamily: "ubuntu",
              fontSize: "3rem",
              fontWeight: "800",
              userSelect: "none",
              color: "#E5E4E2",
              textTransform: "uppercase",
            }}
          >
            contact with me
          </Typography>
          <hr width="60%" sx={{ color: "#8c8c8b" }} />
          <Box
            sx={{
              my: "2rem",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "left",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                my: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <ForwardToInboxOutlinedIcon
                sx={{ color: "#8c8c8b", fontSize: "72px" }}
              />
              <Typography
                sx={{
                  mx: "2rem",
                  fontFamily: "ubuntu",
                  fontSize: "2rem",
                  fontWeight: "500",
                  userSelect: "text",
                  color: "#E5E4E2",
                }}
              >
                marekmark22@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                my: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <PhoneOutlinedIcon sx={{ color: "#8c8c8b", fontSize: "72px" }} />
              <Typography
                sx={{
                  mx: "2rem",
                  fontFamily: "ubuntu",
                  fontSize: "2rem",
                  fontWeight: "500",
                  userSelect: "text",
                  color: "#E5E4E2",
                }}
              >
                + 38 096 385 45 60
              </Typography>
            </Box>
            <Box
              sx={{
                my: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <RoomOutlinedIcon sx={{ color: "#8c8c8b", fontSize: "72px" }} />
              <Typography
                sx={{
                  mx: "2rem",
                  fontFamily: "ubuntu",
                  fontSize: "2rem",
                  fontWeight: "500",
                  userSelect: "text",
                  color: "#E5E4E2",
                }}
              >
                Lviv, Ukraine
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={5.25}
          md={5.25}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <form widht="100%" autoComplete="off" onSubmit={handleSubmit}>
            <Grid
              xs={10}
              md={10}
              sx={{
                m: "auto",
                height: "100vh",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <TextField
                InputLabelProps={{
                  min: 0,
                  style: {
                    fontSize: "1.2rem",
                    fontFamily: "ubuntu",
                    fontWeight: "500",
                    left: "1rem",
                  },
                }}
                inputProps={{
                  min: 0,
                  style: {
                    fontSize: "1rem",
                    fontFamily: "ubuntu",
                    fontWeight: "500",
                    left: "1rem",
                  },
                }}
                sx={{
                  height: "3.5rem",
                  bgcolor: "white",
                  my: "1rem",
                  borderRadius: "2rem",
                }}
                label="Email"
                fullWidth
                type="text"
                className="form-control"
                required
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                InputLabelProps={{
                  min: 0,
                  style: {
                    fontSize: "1.2rem",
                    fontFamily: "ubuntu",
                    fontWeight: "500",
                    left: "1rem",
                  },
                }}
                inputProps={{
                  min: 0,
                  style: {
                    fontSize: "1rem",
                    fontFamily: "ubuntu",
                    fontWeight: "500",
                    left: "1rem",
                  },
                }}
                sx={{
                  height: "3.5rem",
                  bgcolor: "white",
                  my: "1rem",
                  borderRadius: "2rem",
                }}
                type="text"
                className="form-control"
                required
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                label="Name"
                fullWidth
              />
              <TextField
                InputLabelProps={{
                  min: 0,
                  style: {
                    fontSize: "1.2rem",
                    fontFamily: "ubuntu",
                    fontWeight: "500",
                    left: "1rem",
                  },
                }}
                inputProps={{
                  min: 0,
                  style: {
                    borderRadius: "2rem",
                    fontSize: "1rem",
                    fontFamily: "ubuntu",
                    fontWeight: "500",
                    left: "1rem",
                  },
                }}
                sx={{
                  minheight: "3.5rem",
                  bgcolor: "white",
                  my: "1rem",
                  borderRadius: "2rem",
                }}
                type="text"
                className="form-control"
                required
                placeholder="Write a message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                label="Message"
                fullWidth
                multiline
                rows={8}
              />
              <Button
                // onClick={}
                type="submit"
                variant="contained"
                sx={{
                  my: 1,
                  width: "25%",
                  borderRadius: 8,
                  backgroundColor: "#3D685F",

                  "&:hover": {
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#0f8a70",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "ubuntu",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    userSelect: "none",
                    color: "#E5E4E2",
                    textTransform: "uppercase",
                  }}
                >
                  send
                </Typography>
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      {showSuccessAlert && (
        <Alert
          severity="success"
          sx={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            zIndex: 1000,
            fontFamily: "ubuntu",
            fontSize: "1.1rem",
            fontWeight: "500",
            userSelect: "none",
          }}
        >
          <AlertTitle sx={{
            zIndex: 1000,
            fontFamily: "ubuntu",
            fontSize: "1.4rem",
            fontWeight: "600",
            userSelect: "none",
          }}>Success</AlertTitle>
          Your submission was successful and has been received!
        </Alert>
      )}
    </Box>
  );
};

export default FullScreenPage5;
