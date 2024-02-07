import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ReactComponent as Icon } from "./icon2.svg";

function ResponsiveAppBar() {
  const handleClickScrollSkills = () => {
    const Skills = document.getElementById("page3");
    if (Skills) {
      // 👇 Will scroll smoothly to the top of the next section
      Skills.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollHome = () => {
    const Home = document.getElementById("page1");
    if (Home) {
      // 👇 Will scroll smoothly to the top of the next section
      Home.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollContact = () => {
    const Contact = document.getElementById("page5");
    if (Contact) {
      // 👇 Will scroll smoothly to the top of the next section
      Contact.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrollAbout = () => {
    const About = document.getElementById("page2");
    if (About) {
      // 👇 Will scroll smoothly to the top of the next section
      About.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollWorks = () => {
    const Works = document.getElementById("page4");
    if (Works) {
      // 👇 Will scroll smoothly to the top of the next section
      Works.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pages = {
    About: handleClickScrollAbout,
    Skills: handleClickScrollSkills,
    Works: handleClickScrollWorks,
    Contact: handleClickScrollContact,
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  console.log(pages);
  return (
    <AppBar
      position="sticky"
      style={{
        zIndex: 800,
        background: "transparent",
        boxShadow: "none",
        height: "8rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Icon style={{ height: "7rem", width: "auto" }} />
            <Button
              sx={{
                ml: "2rem",
                textAlign: "rignt",
                fontFamily: "Ubuntu",
                fontSize: "36px",
                fontWeight: 800,
                userSelect: "none",
                textTransform: "uppercase",
                color: "white",
              }}
              onClick={handleClickScrollHome}
            >
              koval mark
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                marginLeft: "auto",
                alignItems: "center",
              }}
            >
              {Object.keys(pages).map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" textTransform="uppercase">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
              marginRight: "3rem",
            }}
          >
            {Object.keys(pages).map((page) => (
              <Button
                key={page}
                onClick={pages[page]}
                sx={{
                  ml: 8,
                  color: "white",
                  display: "block",
                  fontFamily: "Ubuntu",
                  fontSize: "24px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
