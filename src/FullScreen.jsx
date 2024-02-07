import React, { useEffect } from "react";

import { scroller } from "react-scroll";
import { Box } from "@mui/material";
import FullScreenPage1 from "./FullscreenPage1";
import FullScreenPage2 from "./FullscreenPage2";
import FullScreenPage3 from "./FullscreenPage3";
import FullScreenPage4 from "./FullscreenPage4";
import FullScreenPage5 from "./FullscreenPage5";

const FullScreen = () => {
  const handleScroll = () => {
    const pages = document.querySelectorAll(".page");

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const nextPage = pages[i + 1];
      const bound = page.getBoundingClientRect();
      const nextBound = nextPage ? nextPage.getBoundingClientRect() : null;

      if (bound.top < window.innerHeight / 2 && bound.bottom >= 0) {
        if (nextBound && nextBound.top < window.innerHeight / 2) {
          scroller.scrollTo(nextPage.id, {
            duration: 500,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      <FullScreenPage1 id="page1" title="Page 1" />
      <FullScreenPage2 id="page2" title="Page 2" />
      <FullScreenPage3 id="page3" title="Page 3" />
      <FullScreenPage4 id="page4" title="Page 4" />
      <FullScreenPage5 id="page5" title="Page 5" />
    </Box>
  );
};

export default FullScreen;
